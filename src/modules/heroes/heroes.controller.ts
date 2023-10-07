import { Controller, Get } from '@nestjs/common';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
  constructor(private heroesService: HeroesService) {}

  @Get()
  findHeroes() {
    return this.heroesService.findHeroes();
  }
}
