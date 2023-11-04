import { UserId } from 'library-api/src/entities/User';

export type PlainUserModel = {
  id: UserId;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  preferredBook: string;
};
