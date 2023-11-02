import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { HeroesModule } from '../heroes/heroes.module';

@Module({
  imports: [HeroesModule],
  providers: [TasksService],
})
export class TasksModule {}
