'use client';

import { useDetailedBook } from '@/hooks/providers/detailedBookProvider';
import { format } from 'date-fns';
import { useParams } from 'next/navigation';
import { FC, useEffect } from 'react';

const BooksDetailsPage: FC = () => {
  const { id } = useParams();
  const { book, load } = useDetailedBook(); // Utilisez le hook useDetailedBook

  useEffect(() => {
    const bookId = Array.isArray(id) ? id.join('') : id; // Si id est un tableau, utilisez join pour le convertir en une seule chaîne de caractères
    load(bookId);
  });

  const formattedWrittenOn = book
    ? format(new Date(book.writtenOn), 'dd/MM/yyyy')
    : '';

  return (
    <div>
      {book ? (
        <div className="h-screen p-5 flex">
          <div className="w-1/2 flex justify-center items-center flex-col">
            <h1 className="text-4xl font-bold mb-10">{book.name}</h1>
            <img src={book.cover} alt="test" className="h-96 w-60" />
          </div>
          <div className="w-1/2 flex justify-center items-center flex-col">
            <p className="text-2xl py-3">
              Genres :&nbsp;
              {book?.genres.map((genre) => genre?.name).join(', ')}
            </p>
            <p className="text-2xl py-3">
              Publié en&nbsp;
              {formattedWrittenOn}
            </p>
            <p className="text-2xl py-3">
              Par&nbsp;
              {book.author.firstName}
              &nbsp;
              {book.author.lastName}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};

export default BooksDetailsPage;
