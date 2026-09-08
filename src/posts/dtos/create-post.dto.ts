import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  Matches,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { PostType } from '../enums/postType.enum';
import { postStatus } from '../enums/postStatus.enum';
import { CreatePostMetaOptionsDto } from '../../meta-options/dtos/create-post-meta-options.dto';
import { Type } from 'class-transformer';

export class CreatePostDto {
  @ApiProperty({
    type: String,
    description: 'Post title',
    example: 'Post 1',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Length(3, 500)
  title: string;

  @ApiProperty({
    enum: PostType,
    description: 'Post type',
    example: 'post',
    required: true,
  })
  @IsEnum(PostType)
  @IsNotEmpty()
  postType: PostType;

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

  @ApiProperty({
    enum: postStatus,
    description: 'Post status',
    example: 'draft',
    required: true,
  })
  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus;

  @ApiPropertyOptional({
    type: String,
    description: 'Post content',
    example: 'Content of post 1',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Length(3, 1000)
  content?: string;

  @ApiPropertyOptional({
    type: String,
    description: 'Post schema',
    example: '{"type": "object"}',
    required: false,
  })
  @IsString()
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional({
    type: String,
    description: 'Featured image url',
    example: 'https://example.com/image.jpg',
    required: false,
  })
  @IsUrl()
  @IsOptional()
  @MaxLength(1024)
  featuredImageUrl?: string;

  @ApiPropertyOptional({
    type: Date,
    description: 'Publish on',
    example: '2022-01-01T00:00:00.000Z',
    required: false,
  })
  @IsOptional()
  @IsISO8601()
  publishOn?: Date;

  @ApiPropertyOptional({
    type: [String],
    description: 'Post tags',
    example: ['tag1', 'tag2'],
    required: false,
  })
  @IsOptional()
  @IsString({ each: true })
  @IsArray()
  @Length(3, 100, { each: true })
  tags?: string[];

  @ApiPropertyOptional({
    type: 'array',
    description: 'Post meta options',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description: 'Meta option key',
          example: 'someKey',
        },
        value: {
          type: 'string | number | boolean | Date',
          description: 'Meta option value',
          example: 'someValue',
        },
      },
    },
    example: [{ key: 'someKey', value: 'someValue' }],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto[];
}
