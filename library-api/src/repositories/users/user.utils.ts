import { PlainUserRepositoryOutput } from './user.repository.type';
import { User } from '../../entities';

export const adaptUserEntityToPlainUserModel = (
  user: User,
): PlainUserRepositoryOutput => ({
  ...user,
  preferredBook: user.preferredBook?.name || null,
});
