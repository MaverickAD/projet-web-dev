import { DetailedAuthorModel } from '../models/detailedAuthor.model';
import { GenreModel } from '../models/genre.model';

export type DetailedBookModel = {
  id: string;
  name: string;
  genres: GenreModel[]; // Un tableau de chaînes de caractères pour les genres
  writtenOn: string; // La date de publication sous forme de chaîne de caractères
  author: DetailedAuthorModel;
};