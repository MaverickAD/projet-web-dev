'use client';

import { FC, ReactElement, useEffect } from 'react';
import Link from 'next/link';

const NavBar: FC = (): ReactElement => {

  return (
    <>
      
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
    <a className="flex items-center">
        <img src='/livre.png' className='h-8 mr-5' alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">La Librarie</span>
    </a>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <div className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100" aria-current="page">
            <Link href="/">Home</Link>
          </div>
        </li>
        <li>
        <div className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100" aria-current="page">
            <Link href="/books">Books</Link>
          </div>
        </li>
        <li>
          <div className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100" aria-current="page">
            <Link href="/authors">Authors</Link>
          </div>
        </li>
        <li>
          <div className="block py-2 pl-3 pr-4 text-white bg-blue-400 rounded-3xl pr-6 pl-6" aria-current="page">
            <Link href="/login">Login</Link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
};

export default NavBar;