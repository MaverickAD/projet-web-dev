// Dans votre fichier detailedUserProvider.ts

import { PlainUserModel } from '@/models/user.model';
import axios from 'axios';
import { useState } from 'react';

type UseDetailedUserProvider = {
  user: PlainUserModel | null;
  load: (userId: string) => void;
};

export const useDetailedUser = (): UseDetailedUserProvider => {
  const [user, setUser] = useState<PlainUserModel | null>(null);

  const load = (userId: string): void => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`)
      .then((data) => setUser(data.data))
      .catch((err) => console.error(err));
  };
  return { user, load };
};

type DetailedUserProviders = {
  useDetailedUser: () => UseDetailedUserProvider;
};

export const useDetailedUserProviders = (): DetailedUserProviders => ({
  useDetailedUser,
});
