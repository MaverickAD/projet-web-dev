'use client';

import { PlainAuthorModel } from '@/models';
import axios from 'axios';
import { FC, ReactElement, useState } from 'react';

const AddAuthorModal: FC = (): ReactElement => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [addAuthor, setAddAuthor] = useState<PlainAuthorModel>({
    id: '',
    firstName: '',
    lastName: '',
    photoUrl: '',
  });

  const handleAddAuthor = (): void => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/authors`, addAuthor)
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <button
        type="button"
        className="text-white bg-blue-400 rounded-3xl p-3 m-3"
        onClick={(): void => {
          setShowModal(true);
        }}
      >
        Ajouter un auteur
      </button>
      {showModal && (
        <>
          <div className="flex justify-center items-center fixed inset-0 z-50">
            <div className="relative w-full max-w-4xl">
              <div className="flex flex-col rounded-lg shadow-lg relative bg-slate-100">
                <div className="p-5 w-full flex justify-between">
                  <h3 className="text-3xl font-semibold">Ajouter un auteur</h3>

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
                          htmlFor="firstName"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Prénom :
                          <input
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e): void =>
                              setAddAuthor({
                                ...addAuthor,
                                firstName: e.target.value,
                              })
                            }
                          />
                        </label>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Nom :
                          <input
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e): void =>
                              setAddAuthor({
                                ...addAuthor,
                                lastName: e.target.value,
                              })
                            }
                          />
                        </label>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="photoUrl"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Photo URL :
                          <input
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e): void =>
                              setAddAuthor({
                                ...addAuthor,
                                photoUrl: e.target.value,
                              })
                            }
                          />
                        </label>
                      </div>
                    </div>

                    <div className="flex flex-row-reverse">
                      <button
                        type="button"
                        className="text-white bg-blue-400 rounded-3xl px-4 py-2 m-2"
                        onClick={(): void => {
                          handleAddAuthor();
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

export default AddAuthorModal;
