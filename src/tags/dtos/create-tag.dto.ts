import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';

export class CreateTagDto {
  @ApiProperty({
    type: String,
    description: 'Tag name',
    example: 'Tag 1',
    required: true,
  })
  @IsString()
  @Length(3, 256)
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    description: 'Post slug',
    example: 'my-slug',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9-]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" as separator. For example: "my-slug"',
  })
  @MaxLength(256)
  slug: string;

  @ApiPropertyOptional({
    type: String,
    description: 'Tag description',
    example: 'Tag 1 description',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    type: String,
    description: 'Tag schema',
    example: 'Tag 1 schema',
  })
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional({
    type: String,
    description: 'Tag schema',
    example: 'Tag 1 schema',
  })
  @IsOptional()
  @IsUrl()
  @MaxLength(1024)
  featuredImageUrl?: string;
}
