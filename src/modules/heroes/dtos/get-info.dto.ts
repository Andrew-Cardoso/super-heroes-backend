import { IsEnum } from 'class-validator';
import { MarvelInfoType } from 'src/modules/shared/marvel/enums/marvel-info-type.enum';

export class GetInfoDto {
  @IsEnum(MarvelInfoType)
  type: MarvelInfoType;
}
