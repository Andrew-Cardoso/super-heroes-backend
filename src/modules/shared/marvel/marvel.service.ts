import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { MarvelConfig } from 'src/config/configuration';
import { createHash } from 'crypto';
import { MarvelHero } from './interfaces/marvel-hero';
import { MarvelInfoType } from './enums/marvel-info-type.enum';

@Injectable()
export class MarvelService {
  private readonly marvel = Object.freeze(
    this.configService.getOrThrow<MarvelConfig>('marvel'),
  );

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async fetchHeroes(page: number) {
    const limit = 100;
    const offset = page * limit;

    const url = `/v1/public/characters?limit=${limit}&offset=${offset}`;

    const response = await this.httpService.axiosRef.get(
      `${url}&${this.query}`,
    );

    const heroes: MarvelHero[] = response.data.data.results;

    return heroes;
  }

  async getHeroInfo(id: number, type: MarvelInfoType) {
    const url = `/v1/public/characters/${id}/${type}?${this.query}`;
    const response = await this.httpService.axiosRef.get(url);
    const info = response.data;
    return info;
  }

  private get query() {
    const ts = Date.now();
    const { privateKey, publicKey } = this.marvel;
    const hash = createHash('md5')
      .update(`${ts}${privateKey}${publicKey}`)
      .digest('hex');
    return `ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  }
}
