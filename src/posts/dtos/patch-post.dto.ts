import { CreatePostDto } from './create-post.dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class PatchPostDto extends PartialType(CreatePostDto) {
  @ApiProperty({
    type: Number,
    description: 'Post id',
    example: 1,
    required: true,
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}
