'use client';

import { FC, ReactElement, useState } from 'react';
import { useDeleteAuthor } from '@/app/api/author.detail.delete';

interface DeleteAuthorModalProps {
  author: string;
}

const DeleteAuthorModal: FC<DeleteAuthorModalProps> = ({
  author,
}): ReactElement => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleDeleteAuthor = async (): Promise<void> => {
    try {
      const deleteAuthor = useDeleteAuthor();
      await deleteAuthor(author);
      // Actualisez la liste des utilisateurs ou effectuez d'autres actions nécessaires
      console.log('Auteur supprimé avec succès');
      window.location.href = '/authors';
    } catch (error) {
      // Gestion des erreurs
      console.error('Erreur lors de la suppression de l auteur', error);
    }
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
        Supprimer cet auteur
      </button>
      {showModal && (
        <>
          <div className="flex justify-center items-center fixed inset-0 z-50">
            <div className="relative w-full max-w-4xl">
              <div className="flex flex-col rounded-lg shadow-lg relative bg-slate-100">
                <div className="p-5 w-full flex justify-between">
                  <h3 className="text-3xl font-semibold">Supprimer ce livre</h3>

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
                        <p className="block text-sm font-medium leading-6 text-gray-900">
                          Etes-vous sûr de vouloir supprimer cet auteur ?
                        </p>
                      </div>

                      <div className="flex flex-row-reverse">
                        <button
                          type="button"
                          onClick={(): Promise<void> => handleDeleteAuthor()}
                          className="text-white bg-blue-400 rounded-3xl px-4 py-2 m-2"
                        >
                          Supprimer
                        </button>
                        <button
                          type="button"
                          onClick={(): void => {
                            setShowModal(false);
                          }}
                          className="text-white bg-slate-200 rounded-3xl px-4 py-2 m-2"
                        >
                          Annuler
                        </button>
                      </div>
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

export default DeleteAuthorModal;
