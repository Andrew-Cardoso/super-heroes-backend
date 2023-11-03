import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { MarvelConfig } from 'src/config/configuration';

@Module({
  imports: [
    HttpModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        baseURL: configService.getOrThrow<MarvelConfig>('marvel').api,
      }),
    }),
  ],
  providers: [TasksService],
})
export class TasksModule {}
