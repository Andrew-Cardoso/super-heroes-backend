import {
  Injectable,
  OnApplicationBootstrap,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnApplicationBootstrap
{
  constructor() {
    super({
      log: [
        {
          emit: 'stdout',
          level: 'query',
        },
      ],
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onApplicationBootstrap() {
    this.performanceMeasurementMiddleware();
  }

  private performanceMeasurementMiddleware() {
    this.$use(async (params, next) => {
      const before = Date.now();
      const result = await next(params);
      const after = Date.now();
      console.log(
        `Query ${params.model}.${params.action} took ${after - before}ms`,
      );
      return result;
    });
  }
}
