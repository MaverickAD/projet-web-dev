'use client';

import { FC, ReactElement } from 'react';
import { PlainBookModel } from '@/models';

interface BookCardProps {
  book: PlainBookModel;
}

const BookCard: FC<BookCardProps> = ({ book }): ReactElement => {
  const authorName = `${book.author.firstName} ${book.author.lastName}`;
  const writtenOn = new Date(book.writtenOn).toLocaleDateString();

  return (
    <div className="border border-red-500 rounded-xl w-full max-w-xs p-2 m-2 bg-white">
      <div className="flex justify-center items-center mb-2">
        <div className="w-40 h-60 border border-orange-500">Image</div>
      </div>

      <div className="border border-green-500 mb-2 px-2">
        <h1 className="text-2xl italic">{book.name}</h1>
        <p className="text-lg text-gray-500">{authorName}</p>
      </div>

      <p>{writtenOn}</p>
      <ul className="list-inside list-disc">
        {book.genres.map((genre: string) => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookCard;
