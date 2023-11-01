import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AuthorUseCases } from '../../useCases';
import { PlainAuthorPresenter } from './author.presenter';
import { Author, AuthorId } from '../../entities';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorUseCases: AuthorUseCases) {}

  @Get('/')
  public async getAll(): Promise<PlainAuthorPresenter[]> {
    const authors = await this.authorUseCases.getAllPlain();

    return authors.map(PlainAuthorPresenter.from);
  }

  @Get('/:id')
  public async getById(
    @Param('id') id: AuthorId,
  ): Promise<PlainAuthorPresenter> {
    const author = await this.authorUseCases.getById(id);

    return PlainAuthorPresenter.from(author);
  }

  @Post('/')
  public async add(@Body() input: Author): Promise<PlainAuthorPresenter> {
    const author = await this.authorUseCases.add(input);

    return PlainAuthorPresenter.from(author);
  }

  @Patch('/:id')
  public async updateById(
    @Param('id') id: AuthorId,
    @Body() input: Author,
  ): Promise<PlainAuthorPresenter> {
    const author = await this.authorUseCases.updateById(id, input);

    return PlainAuthorPresenter.from(author);
  }

  @Delete('/:id')
  public async deleteById(@Param('id') id: AuthorId): Promise<void> {
    return this.authorUseCases.deleteById(id);
  }
}
