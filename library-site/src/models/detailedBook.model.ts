import { DetailedAuthorModel } from '../models/detailedAuthor.model';

export type DetailedBookModel = {
  id: string;
  name: string;
  genres: string[]; // Un tableau de chaînes de caractères pour les genres
  publicationDate: string; // La date de publication sous forme de chaîne de caractères
  author: DetailedAuthorModel;
};