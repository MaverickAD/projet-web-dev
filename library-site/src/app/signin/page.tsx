'use client';

import { FC, ReactElement, useEffect } from 'react';

const LoginPage: FC = (): ReactElement => {

  return (
    <>
          <form>
              <div className="space-y-12 flex justify-center mt-20 h-screen">

                  <div className="border-b border-gray-900/10 pb-12">
                      <h2 className="text-base font-semibold leading-7 text-gray-900 text-lg text-center">Informations Personnelles</h2>
                      

                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                          <div className="sm:col-span-3">
                              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                  Prénom
                              </label>
                              <div className="mt-2">
                                  <input
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                              </div>
                          </div>

                          <div className="sm:col-span-3">
                              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                  Nom
                              </label>
                              <div className="mt-2">
                                  <input
                                      type="text"
                                      name="last-name"
                                      id="last-name"
                                      autoComplete="family-name"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                              </div>
                          </div>
                      </div>

                      <div className="sm:col-span-4 mt-8">
                              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                  Adresse e-mail
                              </label>
                              <div className="mt-2">
                                  <input
                                      id="email"
                                      name="email"
                                      type="email"
                                      autoComplete="email"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                              </div>
                          </div>

                          <div className="sm:col-span-4 mt-8">
                              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                  Mot de passe
                              </label>
                              <div className="mt-2">
                                  <input
                                      id="text"
                                      name="password"
                                      type="password"
                                      autoComplete="password"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                              </div>
                          </div>

                          <div className="sm:col-span-4 mt-8">
                              <label htmlFor="password_confirmation" className="block text-sm font-medium leading-6 text-gray-900">
                                  Confirmation du mot de passe
                              </label>
                              <div className="mt-2">
                                  <input
                                      id="password_confirmation"
                                      name="password_confirmation"
                                      type="password_confirmation"
                                      autoComplete="password_confirmation"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                              </div>
                          </div>


                      <div className="mt-6 flex items-center justify-center gap-x-6 mt-20">
                          
                        <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2focus:outline-none">S'inscrire</a>

                      </div>
                  </div>
                </div>
          </form>
    </>
  );
};

export default LoginPage;

