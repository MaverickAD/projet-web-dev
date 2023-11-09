'use client'

import { FC, ReactElement, useState, ChangeEvent } from 'react';
import { createUser } from '../api/user.create';
import { PlainUserModel } from '../../models/user.model';
import { PlainBookModel } from "@/models/book.model";

const LoginPage: FC = (): ReactElement => {
  const [formData, setFormData] = useState<PlainUserModel>({
    id: 'test0  ', // Remplacez par la logique de génération d'ID appropriée
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    preferredBook: null,
    booksRead: [],
    favoriteGenres: [],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // Mettre à jour le state avec les données du formulaire
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCreateUser = async (formData: PlainUserModel) => {
    try {
      // Envoi des données du formulaire à la fonction createUser
      await createUser(formData);
      // Gestion de la création réussie
      console.log('Utilisateur créé avec succès');
    } catch (error) {
      // Gestion des erreurs
      console.error('Erreur lors de la création de l\'utilisateur', error);
    }
  };
  

  return (
    <form>
      <div className="space-y-12 flex justify-center mt-20 h-screen">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
            Informations Personnelles
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 ">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Prénom
                <input
                  type="text"
                  id="firstName"
                  name="first-name"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                />
              </label>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nom
                <input
                  type="text"
                  id="lastName"
                  name="last-name"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                />
              </label>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="age"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Âge
                <input
                  type="tel"
                  id="age"
                  name="age"
                  autoComplete="age"
                  pattern="[0-9]*"
                  title="Veuillez entrer un nombre"
                  value={formData.age}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
                />
              </label>
            </div>
          </div>

          <div className="sm:col-span-4 mt-8">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Adresse e-mail
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
              />
            </label>
          </div>

          <div className="sm:col-span-4 mt-8">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Mot de passe
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
              />
            </label>
          </div>

          <div className="sm:col-span-4 mt-8">
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirmation du mot de passe
              <input
                id="password_confirmation"
                name="password_confirmation"
                type="password_confirmation"
                autoComplete="password_confirmation"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
              />
            </label>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2focus:outline-none"
              onClick={() => handleCreateUser(formData)}
            >
              S&apos;inscrire
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
