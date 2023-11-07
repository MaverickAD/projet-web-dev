import { UserId } from 'library-api/src/entities/User';
import { PlainUserModel } from 'library-api/src/models';
import { UserModel } from 'library-api/src/models';
import { Book } from '../../entities';

export class PlainUserPresenter {
  id: UserId;

  firstName: string;

  lastName: string;

  age: number;

  email: string;

  password: string;

  preferredBook?: string | null;
  preferredBook?: Book | null;

  private constructor(data: PlainUserPresenter) {
    Object.assign(this, data);
  }

  public static from(data: PlainUserModel): PlainUserPresenter {
    return new PlainUserPresenter({
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      email: data.email,
      password: data.password,
      preferredBook: data.preferredBook,
    });
  }
}
