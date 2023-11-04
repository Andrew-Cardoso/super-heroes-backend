import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
import { MarvelModule } from '../shared/marvel/marvel.module';

@Module({
  imports: [MarvelModule],
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class HeroesModule {}
