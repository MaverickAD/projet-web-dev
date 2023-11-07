import { PlainAuthorModel } from '@/models/author.model';
import { PlainGenreModel } from '@/models/genre.model';

export type PlainBookModel = {
  id: string;
  name: string;
  writtenOn: string;
  genres: PlainGenreModel[];
  author: PlainAuthorModel;
};
