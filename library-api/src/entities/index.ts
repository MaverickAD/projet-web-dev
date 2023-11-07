import { Author } from 'library-api/src/entities/Author';
import { Book } from 'library-api/src/entities/Book';
import { BookGenre } from 'library-api/src/entities/BookGenre';
import { Genre } from 'library-api/src/entities/Genre';
import { User } from 'library-api/src/entities/User';
import { UserReadBook } from 'library-api/src/entities/UserReadBook';
import { UserFavoriteGenre } from './UserFavoriteGenre';

export * from './Author';
// eslint-disable-next-line import/no-cycle
export * from './Book';
export * from './BookGenre';
export * from './Genre';
export * from './User';
export * from './UserReadBook';
export * from './UserFavoriteGenre';

export const entities = [
  Author,
  Book,
  BookGenre,
  Genre,
  User,
  UserReadBook,
  UserFavoriteGenre,
];
