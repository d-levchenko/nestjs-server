import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class GetPostsParamDto {
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  id: number;
}
