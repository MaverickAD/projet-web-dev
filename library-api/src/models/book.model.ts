import { Author, BookId, Genre } from 'library-api/src/entities';

export type PlainBookModel = {
  id: BookId;
  name: string;
  writtenOn: Date;
  author: Author;
  cover?: string;
  genres: string[];
};

export type BookModel = {
  id: BookId;
  name: string;
  writtenOn: Date;
  author: Author;
  cover?: string;
  genres: Genre[];
};
