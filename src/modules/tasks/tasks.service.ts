import {
  Inject,
  Injectable,
  Logger,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';
import { DayjsService } from '../shared/dayjs/dayjs.module';
import { Cron, CronExpression } from '@nestjs/schedule';
import { HeroesService } from '../heroes/heroes.service';

@Injectable()
export class TasksService implements OnApplicationBootstrap {
  private readonly logger = new Logger('Tasks');

  constructor(
    @Inject('DAYJS') private readonly dayjs: DayjsService,
    private readonly prismaService: PrismaService,
    private readonly heroesService: HeroesService,
  ) {}

  async onApplicationBootstrap() {
    await this.fetchHeroes();
  }

  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  private async updateDatabase() {
    const deletedCount = await this.deleteOldRequests();
    if (deletedCount > 0) {
      this.fetchHeroes();
    }
  }

  private async deleteOldRequests() {
    try {
      const { count } = await this.prismaService.request.deleteMany({
        where: {
          createdAt: {
            lte: this.dayjs().add(-3, 'day').toDate(),
          },
        },
      });
      this.logger.log(`Deleted ${count} old requests`);
      return count;
    } catch (err) {
      console.error(err);
    }
  }

  private async fetchHeroes(page = 0) {
    const result = await this.heroesService.findHeroes({ page });
    this.logger.log(`Fetched ${result.results.length} heroes`);
    if (result.results.length > 0) this.fetchHeroes(page + 1);
  }
}
