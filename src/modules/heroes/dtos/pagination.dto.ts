import { Type } from 'class-transformer';
import { IsNumber, Max, Min } from 'class-validator';

export class PaginationDto {
  @Type(() => Number)
  @IsNumber()
  @Max(100)
  @Min(20)
  limit: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  offset: number;
}
