import { Injectable } from '@nestjs/common';
import { AuthorRepository } from '../../repositories';
import { PlainAuthorPresenter } from '../../controllers/authors/author.presenter';
import { AuthorId } from '../../entities';

@Injectable()
export class AuthorUseCases {
  constructor(private readonly authorRepository: AuthorRepository) {}

  public async getAllPlain(): Promise<PlainAuthorPresenter[]> {
    return this.authorRepository.getAllPlain();
  }

  public async getById(id: AuthorId): Promise<PlainAuthorPresenter> {
    return this.authorRepository.getById(id);
  }
}
