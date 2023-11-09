import { PlainBookModel } from '@/models/book.model';

export type PlainUserModel = {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  password: string;
  preferredBook: PlainBookModel;
  booksRead: PlainBookModel[];
  favoriteGenres: string[];
};
