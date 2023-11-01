import { Injectable } from '@nestjs/common';
import { AuthorRepository } from '../../repositories';
import { PlainAuthorPresenter } from '../../controllers/authors/author.presenter';
import { Author, AuthorId } from '../../entities';

@Injectable()
export class AuthorUseCases {
  constructor(private readonly authorRepository: AuthorRepository) {}

  public async getAllPlain(): Promise<PlainAuthorPresenter[]> {
    return this.authorRepository.getAllPlain();
  }

  public async getById(id: AuthorId): Promise<PlainAuthorPresenter> {
    return this.authorRepository.getById(id);
  }

  public async add(input: Author): Promise<PlainAuthorPresenter> {
    return this.authorRepository.add(input);
  }

  public async updateById(
    id: AuthorId,
    input: Author,
  ): Promise<PlainAuthorPresenter> {
    return this.authorRepository.updateById(id, input);
  }

  public async deleteById(id: AuthorId): Promise<void> {
    return this.authorRepository.deleteById(id);
  }
}
