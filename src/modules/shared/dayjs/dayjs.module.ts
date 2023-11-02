import { Global, Module } from '@nestjs/common';
import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export type DayjsService = typeof dayjs;

@Global()
@Module({
  providers: [
    {
      provide: 'DAYJS',
      useFactory() {
        dayjs.locale('pt-br');
        return dayjs;
      },
    },
  ],
  exports: ['DAYJS'],
})
export class DayjsModule {}
