import { PlainAuthorModel } from '@/models/author.model';

export type PlainBookModel = {
  id: string;
  name: string;
  writtenOn: string;
  genres: string[];
  author: PlainAuthorModel;
};
