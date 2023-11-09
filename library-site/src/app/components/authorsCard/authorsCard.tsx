'use client';

import { PlainAuthorModel } from '@/models';
import Link from 'next/link';
import { FC, ReactElement } from 'react';

interface AuthorCardProps {
  author: PlainAuthorModel;
}

const AuthorCard: FC<AuthorCardProps> = ({ author }): ReactElement => {
  const authorName = `${author.firstName} ${author.lastName}`;

  return (
    <div className="rounded-xl shadow-2xl w-full max-w-xs p-2 m-2 bg-white">
      <div className="flex justify-center items-center mb-2">
        <img src={author.photoUrl} alt="book cover" className="w-40 h-60" />
      </div>

      <div className="border-b border-t mb-2 p-2">
        <div className="">
          <h1 className="text-2xl italic">
            <Link href={`authors/${author.id}`}>{authorName}</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
