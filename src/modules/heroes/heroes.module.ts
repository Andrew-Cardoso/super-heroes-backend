import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
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
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class HeroesModule {}
