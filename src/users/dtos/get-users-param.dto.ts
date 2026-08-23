import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetUsersParamDto {
  @ApiPropertyOptional({
    type: String,
    description: 'User id',
    required: false,
  })
  @IsString()
  @IsOptional()
  id: string;
}
