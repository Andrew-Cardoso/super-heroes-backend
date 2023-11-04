import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { MarvelModule } from '../shared/marvel/marvel.module';

@Module({
  imports: [MarvelModule],
  providers: [TasksService],
})
export class TasksModule {}
