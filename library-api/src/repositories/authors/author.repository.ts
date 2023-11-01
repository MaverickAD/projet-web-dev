import { Injectable } from '@nestjs/common';
import { Author, AuthorId } from 'library-api/src/entities';
import { DataSource, Repository } from 'typeorm';
import { PlainAuthorPresenter } from '../../controllers/authors/author.presenter';
import { NotFoundError } from '../../common/errors';

@Injectable()
export class AuthorRepository extends Repository<Author> {
  constructor(public readonly dataSource: DataSource) {
    super(Author, dataSource.createEntityManager());
  }

  public async getAllPlain(): Promise<PlainAuthorPresenter[]> {
    const authors = await this.find();

    return authors.map(PlainAuthorPresenter.from);
  }

  public async getById(id: AuthorId): Promise<PlainAuthorPresenter> {
    const author = await this.findOne({ where: { id } });

    if (!author) {
      throw new NotFoundError(`Author - '${id}'`);
    }

    return PlainAuthorPresenter.from(author);
  }
}
