import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';

@Injectable()
export class HeroesService {
  constructor(private prismaService: PrismaService) {}

  async getHeroes() {
    return this.prismaService.hero.findMany({
      select: {
        heroId: true,
        name: true,
        description: true,
        thumbnail: true,
      },
    });
  }
}
