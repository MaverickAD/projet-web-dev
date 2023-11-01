'use client'

import { useParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { useBookProvider } from '@/hooks/providers/detailedBookProvider';

const BooksDetailsPage: FC = () => {
  const { id } = useParams();
  const { book, load } = useBookProvider(); // Utilisez le hook useDetailedBook
  
  useEffect(() => {
    const bookId = Array.isArray(id) ? id.join('') : id; // Si id est un tableau, utilisez join pour le convertir en une seule chaîne de caractères
    load(bookId);
    
  }, []);
  console.log(book)
  
  return (
    <div>
      {book ? (
        <>
          <div className='h-screen p-5 flex'>
          <div className='w-1/2 flex justify-center items-center flex-col'>
            <h1 className='text-4xl font-bold mb-10'>{book.name}</h1>
            <div className='h-96 w-96 bg-red-500'></div>
            
          </div>
          <div className='w-1/2 flex justify-center items-center flex-col'>
            <p className='text-2xl'>Genres: {book?.genres.map(genre => genre.name).join(', ')}</p>
            <p className='text-2xl'>Publié en {book?.writtenOn}</p>
            <p className='text-2xl'>Par {book.author.firstName} {book.author.lastName}</p>
          </div>
          {/* <img src={book.author.photo} alt={`Photo of ${book.author.firstName} ${book.author.lastName}`} /> */}
          </div>
        </>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};

export default BooksDetailsPage;
