import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { v4 } from 'uuid';
import { User, UserId } from '../../entities';
import { PlainUserRepositoryOutput } from './user.repository.type';
import { adaptUserEntityToPlainUserModel } from './user.utils';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  public async getAllUsers(): Promise<PlainUserRepositoryOutput[]> {
    const users = await this.find({
      relations: { preferredBook: true },
    });

    return users.map(adaptUserEntityToPlainUserModel);
  }

  public async getById(id: UserId): Promise<PlainUserRepositoryOutput> {
    const user = await this.findOne({
      relations: { preferredBook: true },
      where: { id },
    });

    if (!user) {
      throw new Error(`User - '${id}' not found`);
    }

    return adaptUserEntityToPlainUserModel(user);
  }

  public async add(input: User): Promise<PlainUserRepositoryOutput> {
    return this.dataSource.transaction(async (manager) => {
      const [user] = await manager.save<User>(
        manager.create<User>(User, [
          {
            ...input,
            id: v4(),
          },
        ]),
      );

      return this.getById(user.id);
    });
  }

  public async updateById(
    id: UserId,
    input: User,
  ): Promise<PlainUserRepositoryOutput> {
    await this.dataSource.transaction(async (manager) => {
      await manager.update<User>(User, id, {
        ...input,
      });
    });

    return this.getById(id);
  }

  public async deleteById(id: UserId): Promise<void> {
    await this.delete({ id });
  }
}
