import { DetailedBookModel } from './detailedBook.model';

export type DetailedAuthorModel = {
  id: string;
  firstName: string;
  lastName: string;
  photo: string;
  books: DetailedBookModel[];
};
