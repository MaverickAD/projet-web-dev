'use client';

import { FC, ReactElement, useEffect } from 'react';
import { useBooksProviders } from '@/hooks/providers/bookProviders';

const BooksPage: FC = (): ReactElement => {
  const { useListBooks } = useBooksProviders();
  const { books, load } = useListBooks();

  useEffect(() => load, []);
  console.log(books)
  return (
    <>
      <h1>Books</h1>
      {books.map((book) => (
        
        <div key={book.id}>{book.name}</div>
      ))}
    </>
  );
};

export default BooksPage;
