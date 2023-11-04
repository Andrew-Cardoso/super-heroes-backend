import { Module } from '@nestjs/common';
import { MarvelService } from './marvel.service';
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
  providers: [MarvelService],
  exports: [MarvelService],
})
export class MarvelModule {}
