import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MarvelConfig } from 'src/config/configuration';
import * as c from 'crypto';

@Injectable()
export class HeroesService {
  private readonly marvel = Object.freeze(
    this.configService.getOrThrow<MarvelConfig>('marvel'),
  );

  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  async findHeroes() {
    try {
      const ts = Date.now();
      const { privateKey, publicKey } = this.marvel;

      const hash = c
        .createHash('md5')
        .update(`${ts}${privateKey}${publicKey}`)
        .digest('hex');

      const response = await this.httpService.axiosRef.get(
        `/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=100`,
      );

      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}
