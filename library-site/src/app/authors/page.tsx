'use client';

import { FC, ReactElement, useEffect, useState } from 'react';
import AuthorCard from '@/app/components/card/AuthorCard/AuthorCard';
import Card from '@/app/components/card/Card';
import AddAuthorModal from '@/app/components/modal/AddAuthor/AddAuthor.modal';
import Modal from '@/app/components/modal/Modal';
import { useAuthorsProviders } from '@/hooks';

const AuthorsPage: FC = (): ReactElement => {
  const { useListAuthors } = useAuthorsProviders();
  const { authors, authorsLoad } = useListAuthors();
  const [filterByName, setFilterByName] = useState<string>('');
  const [filterByNumberOfBooks, setFilterByNumberOfBooks] = useState<number>(6);

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
      <label htmlFor="filter" className="m-2">
        Filtreur par nombre de livres écrits :
        {filterByNumberOfBooks === 6 ? (
          <p>No filter</p>
        ) : (
          <p>{filterByNumberOfBooks}</p>
        )}
        <input
          type="range"
          defaultValue={6}
          min={0}
          max={6}
          onChange={(e): void => {
            setFilterByNumberOfBooks(Number(e.target.value));
          }}
        />
      </label>
      <Modal title="Ajouter un auteur">
        <AddAuthorModal />
      </Modal>
      <div className="grid grid-cols-4 justify-items-center">
        {authors
          .filter((author) =>
            `${author.firstName} ${author.lastName}`
              .toLowerCase()
              .includes(filterByName.toLowerCase()),
          )
          .filter((author) =>
            filterByNumberOfBooks !== 6
              ? author.writtenBooksNumber === filterByNumberOfBooks
              : author,
          )
          .map((author) => (
            <Card key={author.id} photo={author.photoUrl}>
              <AuthorCard author={author} />
            </Card>
          ))}
      </div>
    </>
  );
};

export default AuthorsPage;
