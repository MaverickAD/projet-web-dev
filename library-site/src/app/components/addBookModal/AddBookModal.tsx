'use client';

import axios from 'axios';
import { FC, ReactElement, useEffect, useState } from 'react';
import { useAuthorsProviders, useGenresProviders } from '@/hooks';
import { BookModel } from '@/models';

const AddBookModal: FC = (): ReactElement => {
  const { useListGenres } = useGenresProviders();
  const { genres, genreLoad } = useListGenres();
  const { useListAuthors } = useAuthorsProviders();
  const { authors, authorsLoad } = useListAuthors();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [addBook, setAddBook] = useState<BookModel>({
    id: '',
    name: '',
    writtenOn: '',
    cover: '',
    bookGenres: [],
    author: '',
  });

  const handleAddBook = (): void => {
    console.log(addBook);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/books`, addBook)
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  };

  useEffect(() => genreLoad);
  useEffect(() => authorsLoad);

  return (
    <div>
      <button
        type="button"
        className="text-white bg-blue-400 rounded-3xl p-3 m-3"
        onClick={(): void => {
          setShowModal(true);
        }}
      >
        Ajouter un livre
      </button>
      {showModal && (
        <>
          <div className="flex justify-center items-center fixed inset-0 z-50">
            <div className="relative w-full max-w-4xl">
              <div className="flex flex-col rounded-lg shadow-lg relative bg-slate-100">
                <div className="p-5 w-full flex justify-between">
                  <h3 className="text-3xl font-semibold">Ajouter un livre</h3>

                  <button
                    type="button"
                    onClick={(): void => {
                      setShowModal(false);
                    }}
                  >
                    X
                  </button>
                </div>

                <div className="p-5 w-full">
                  <form action="">
                    <div className="rounded-md p-2">
                      <div className="mb-4">
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Titre :
                          <input
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e): void => {
                              setAddBook({
                                ...addBook,
                                name: e.target.value,
                              });
                            }}
                          />
                        </label>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="author"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Auteur :
                          <select
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e): void => {
                              setAddBook({
                                ...addBook,
                                author: e.target.value,
                              });
                            }}
                          >
                            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                            <option value="" />
                            {authors.map((author) => (
                              <option key={author.id} value={author.id}>
                                {author.firstName}
                                {author.lastName}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="writtenOn"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Ecrit le :
                          <input
                            type="date"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e): void => {
                              setAddBook({
                                ...addBook,
                                writtenOn: e.target.value,
                              });
                            }}
                          />
                        </label>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="filter"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Genres : &nbsp;
                          <select
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e): void => {
                              setAddBook({
                                ...addBook,
                                bookGenres: [e.target.value],
                              });
                            }}
                          >
                            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                            <option value="" />
                            {genres.map((genre) => (
                              <option key={genre.id} value={genre.name}>
                                {genre.name}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="writtenOn"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Couverture :
                          <input
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e): void => {
                              setAddBook({
                                ...addBook,
                                cover: e.target.value,
                              });
                            }}
                          />
                        </label>
                      </div>
                    </div>

                    <div className="flex flex-row-reverse">
                      <button
                        type="button"
                        className="text-white bg-blue-400 rounded-3xl px-4 py-2 m-2"
                        onClick={(): void => {
                          handleAddBook();
                          setShowModal(false);
                        }}
                      >
                        Ajouter
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      )}
    </div>
  );
};

export default AddBookModal;
