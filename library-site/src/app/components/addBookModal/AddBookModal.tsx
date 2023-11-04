'use client';

import { FC, ReactElement, useState } from 'react';

const AddBookModal: FC = (): ReactElement => {
  const [showModal, setShowModal] = useState<boolean>(false);

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
                          />
                        </label>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="author"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Auteur :
                          <input
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </label>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="writtenOn"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Ecrit le :
                          <input
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </label>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="genres"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Genres :
                          <input
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="flex flex-row-reverse">
                      <button
                        type="button"
                        className="text-white bg-blue-400 rounded-3xl px-4 py-2 m-2"
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
