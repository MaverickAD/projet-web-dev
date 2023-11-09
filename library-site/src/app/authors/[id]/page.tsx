'use client';

import { useDetailedAuthor } from '@/hooks/providers/detailedAuthorProvider';
import { useParams } from 'next/navigation';
import { FC, useEffect } from 'react';

const AuthorsDetailsPage: FC = () => {
  const { id } = useParams();
  const { author, load } = useDetailedAuthor(); // Utilisez le hook useDetailedBook

  useEffect(() => {
    const authorId = Array.isArray(id) ? id.join('') : id; // Si id est un tableau, utilisez join pour le convertir en une seule chaîne de caractères
    load(authorId);
  });

  return (
    <div>
      {author ? (
        <div className="h-screen p-5 flex">
          <div className="w-1/2 flex justify-center items-center flex-col">
            <h1 className="text-4xl font-bold mb-10">
              {author.firstName}
              &nbsp;
              {author.lastName}
            </h1>
            <img src={author.photoUrl} alt="Author photo" />
          </div>
          <div className="w-1/2 flex justify-center items-center grid text-2xl">
            <p className="pb-44 pt-20">
              <p className="text-2xl py-3 underline   py-11 text-4xl">
                Liste des livres écrit :&nbsp;
              </p>
              <div className="flex flex-col">
                {author.books.map((book) => (
                  <a
                    href={`/books/${book.id}`}
                    className="py-3 hover:underline"
                  >
                    {book.name}
                  </a>
                ))}
              </div>
            </p>
          </div>
        </div>
      ) : (
        <p>Loading author details...</p>
      )}
    </div>
  );
};

export default AuthorsDetailsPage;
