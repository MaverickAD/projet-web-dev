'use client';

import { FC, ReactElement, useEffect, useState } from 'react';
import BookCard from '@/app/components/booksCard/BookCard';
import AddBookModal from '@/app/components/modal/AddBook/AddBook.modal';
import Modal from '@/app/components/modal/Modal';
import { useBooksProviders, useGenresProviders } from '@/hooks';

const BooksPage: FC = (): ReactElement => {
  const { useListBooks } = useBooksProviders();
  const { books, booksLoad } = useListBooks();
  const { useListGenres } = useGenresProviders();
  const { genres, genreLoad } = useListGenres();
  const [filterByName, setFilterByName] = useState<string>('');
  const [filterByGenre, setFilterByGenre] = useState<string>('');

  useEffect(() => booksLoad);
  useEffect(() => genreLoad);

  return (
    <>
      <div className="bg-white mb-2">
        <h1 className="text-3xl">Books</h1>
        <label htmlFor="filter" className="m-2">
          Filtrer par titre : &nbsp;
          <input
            className="border border-black rounded-md"
            type="text"
            onChange={(e): void => {
              setFilterByName(e.target.value);
            }}
          />
        </label>
        <label htmlFor="filter" className="m-2">
          Filtrer par genre : &nbsp;
          <select
            className="border border-black rounded-md"
            onChange={(e): void => {
              setFilterByGenre(e.target.value);
            }}
          >
            <option value="">Tous</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.name}>
                {genre.name}
              </option>
            ))}
          </select>
        </label>
        <Modal title="Ajouter un livre">
          <AddBookModal />
        </Modal>
      </div>

      <div className="grid grid-cols-4 justify-items-center">
        {books
          .filter((book) =>
            book.name.toLowerCase().includes(filterByName.toLowerCase()),
          )
          // eslint-disable-next-line no-confusing-arrow
          .filter((book) =>
            filterByGenre === ''
              ? true
              : book.genres.some((genre) => genre === filterByGenre),
          )
          .map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
      </div>
    </>
  );
};

export default BooksPage;
