import { UserId } from 'library-api/src/entities/User';

export type UserModel = {
  id: UserId;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  preferredBook: string;
  preferredBook: Book;
};
