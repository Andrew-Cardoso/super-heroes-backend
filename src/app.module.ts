import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { HeroesModule } from './modules/heroes/heroes.module';
import { PrismaModule } from './modules/shared/prisma/prisma.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './modules/tasks/tasks.module';
import { DayjsModule } from './modules/shared/dayjs/dayjs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ScheduleModule.forRoot(),
    DayjsModule,
    PrismaModule,
    HeroesModule,
    TasksModule,
  ],
})
export class AppModule {}
