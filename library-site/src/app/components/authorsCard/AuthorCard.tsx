'use client';

import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { PlainAuthorModel } from '@/models';
import GenrePill from '@/app/components/genrePill/GenrePill';

interface AuthorCardProps {
  author: PlainAuthorModel;
}

const AuthorCard: FC<AuthorCardProps> = ({ author }): ReactElement => {
  const authorName = `${author.firstName} ${author.lastName}`;

  return (
    <div className="rounded-xl shadow-2xl w-full max-w-xs p-2 m-2 bg-white">
      <div className="flex justify-center items-center mb-2">
        <div className="w-40 h-60 border border-orange-500">Image</div>
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