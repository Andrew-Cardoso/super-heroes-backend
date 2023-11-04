import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';
import { MarvelService } from '../shared/marvel/marvel.service';
import { MarvelInfoType } from '../shared/marvel/enums/marvel-info-type.enum';

@Injectable()
export class HeroesService {
  constructor(
    private prismaService: PrismaService,
    private marvelService: MarvelService,
  ) {}

  async getHeroes() {
    return this.prismaService.hero.findMany({
      select: {
        id: true,
        heroId: true,
        name: true,
        description: true,
        thumbnail: true,
      },
    });
  }

  async getHeroInfo(id: string, type: MarvelInfoType) {
    const { heroId } = await this.prismaService.hero.findUnique({
      where: {
        id,
      },
      select: {
        heroId: true,
      },
    });

    return this.marvelService.getHeroInfo(heroId, type);
  }
}
