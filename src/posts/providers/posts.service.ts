import { Injectable } from '@nestjs/common';
import { GetPostsParamDto } from '../dtos/get-posts-param.dto';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PatchPostDto } from '../dtos/patch-post.dto';

@Injectable()
export class PostsService {
  public getAllPosts(
    getPostsParamDto: GetPostsParamDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        id: 1,
        title: 'Post 1',
        content: 'Content of post 1',
      },
      {
        id: 2,
        title: 'Post 2',
        content: 'Content of post 2',
      },
    ];
  }

  public getPostById(id: number) {
    return {
      id,
      title: 'Post 1',
      content: 'Content of post 1',
    };
  }

  public createPost(createPostDto: CreatePostDto) {
    return {
      id: 1,
      title: createPostDto.title,
      content: createPostDto.content,
    };
  }

  public updatePost(updatePostDto: PatchPostDto) {
    return {
      id: 1,
      title: updatePostDto.title,
      content: updatePostDto.content,
    };
  }
}
