import { IsOptional, IsString } from 'class-validator';

export class GetUsersParamDto {
  @IsString()
  @IsOptional()
  id: string;
}
