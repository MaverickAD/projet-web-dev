'use client';

import { FC, ReactElement, useEffect, useState } from 'react';
import { useAuthorsProviders } from '@/hooks';
import AuthorCard from '@/app/components/authorsCard/AuthorCard';
// import AddBookModal from '@/app/components/addBookModal/AddBookModal';

const AuthorsPage: FC = (): ReactElement => {
  const { useListAuthors } = useAuthorsProviders();
  const { authors, authorsLoad } = useListAuthors();
  const [filterByName, setFilterByName] = useState<string>('');

  useEffect(() => authorsLoad);

  

  return (
    <>
        <label htmlFor="filter" className="m-2">
            Filtrer par auteur : &nbsp;
            <input
            className="border border-black rounded-md"
            type="text"
            onChange={(e): void => {
                setFilterByName(e.target.value);
            }}
            />
        </label>
        <div className="grid grid-cols-4 justify-items-center">
            {authors
            .filter((author) =>
                `${author.firstName} ${author.lastName}`.toLowerCase().includes(filterByName.toLowerCase())
            )
            .map((author) => (
                <AuthorCard key={author.id} author={author} />
            ))}
        </div>
    </>
  );
};

export default AuthorsPage;