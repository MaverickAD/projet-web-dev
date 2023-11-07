import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Genre } from './Genre';
import { User } from './User';

export type UserFavoriteGenreId = string & { __brand: 'UserFavoriteGenre' };

@Entity('UserFavoriteGenres')
export class UserFavoriteGenre extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: UserFavoriteGenreId;

  @ManyToOne(() => User, (user) => user.userFavoriteGenres, {
    onDelete: 'CASCADE',
  })
  user: User;

  @ManyToOne(() => Genre, (genre) => genre.userFavoriteGenres, {
    onDelete: 'CASCADE',
  })
  genre: Genre;
}
