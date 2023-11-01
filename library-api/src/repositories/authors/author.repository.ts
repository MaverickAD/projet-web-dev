import { Injectable } from '@nestjs/common';
import { Author, AuthorId } from 'library-api/src/entities';
import { DataSource, Repository } from 'typeorm';
import { v4 } from 'uuid';
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

  public async add(input: Author): Promise<PlainAuthorPresenter> {
    return this.dataSource.transaction(async (manager) => {
      const [author] = await manager.save<Author>(
        manager.create<Author>(Author, [
          {
            ...input,
            id: v4(), // Generate a new UUID for the author
          },
        ]),
      );

      return PlainAuthorPresenter.from(author);
    });
  }

  public async updateById(
    id: AuthorId,
    input: Author,
  ): Promise<PlainAuthorPresenter> {
    await this.dataSource.transaction(async (manager) => {
      await manager.update<Author>(Author, id, {
        ...input,
      });
    });

    return this.getById(id);
  }

  public async deleteById(id: AuthorId): Promise<void> {
    await this.delete({ id });
  }
}
