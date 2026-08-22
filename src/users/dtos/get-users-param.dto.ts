import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

/* eslint-disable @typescript-eslint/no-unsafe-call */

export class GetUsersParamDto {
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  id: number;
}
