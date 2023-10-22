import { Controller, Get, Query } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { PaginationDto } from './dtos/pagination.dto';

@Controller('heroes')
export class HeroesController {
  constructor(private heroesService: HeroesService) {}

  @Get()
  findHeroes(@Query() pagination: PaginationDto) {
    return this.heroesService.findHeroes(pagination);
  }
}
