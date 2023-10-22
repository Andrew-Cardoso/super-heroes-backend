import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MarvelConfig } from 'src/config/configuration';
import { PrismaService } from '../shared/prisma/prisma.service';
import { createHash } from 'node:crypto';
import { PaginationDto } from './dtos/pagination.dto';

@Injectable()
export class HeroesService {
  private readonly marvel = Object.freeze(
    this.configService.getOrThrow<MarvelConfig>('marvel'),
  );

  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
    private prismaService: PrismaService,
  ) {}

  async findHeroes({ limit, offset }: PaginationDto) {
    const url = `/v1/public/characters?limit=${limit}&offset=${offset}`;

    const cachedResponse = await this.prismaService.request.findUnique({
      where: {
        url,
      },
    });

    if (cachedResponse) return cachedResponse.content;

    const ts = Date.now();
    const { privateKey, publicKey } = this.marvel;
    const hash = createHash('md5')
      .update(`${ts}${privateKey}${publicKey}`)
      .digest('hex');

    const response = await this.httpService.axiosRef.get(
      `${url}&ts=${ts}&apikey=${publicKey}&hash=${hash}`,
    );

    await this.prismaService.request.create({
      data: {
        url,
        content: response.data.data,
      },
    });

    return response.data.data;
  }
}
