import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { HeroesModule } from './modules/heroes/heroes.module';
import { PrismaModule } from './modules/shared/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    PrismaModule,
    HeroesModule,
  ],
})
export class AppModule {}
