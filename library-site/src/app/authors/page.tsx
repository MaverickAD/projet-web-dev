'use client';

import { useParams } from 'next/navigation';
import { FC, useEffect } from 'react';
import { useDetailedAuthor } from '@/hooks/providers/detailedAuthorProvider';

const AuthorsDetailsPage: FC = () => {
    const { id } = useParams();
    const { author, load } = useDetailedAuthor(); // Utilisez le hook useDetailedAuthor

    useEffect(() => {
        const authorId = Array.isArray(id) ? id.join('') : id; // Si id est un tableau, utilisez join pour le convertir en une seule chaîne de caractères
        load(authorId);
    });

    return (
        <div>
            {author ? (
                <div className="h-screen p-5 flex">
                    <div className="w-1/2 flex justify-center items-center flex-col">
                        <h1 className="text-4xl font-bold mb-10">{author.firstName}</h1>
                        <h1 className="text-4xl font-bold mb-10">{author.lastName}</h1>
                        <div className="h-96 w-96 bg-red-500" />
                    </div>
                    <div className="w-1/2 flex justify-center items-center flex-col">

                    </div>
                </div>
            ) : (
                <p>Loading author details...</p>
            )}
        </div>
    );
};

export default AuthorsDetailsPage;
