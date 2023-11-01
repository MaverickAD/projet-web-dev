import { FC, ReactElement } from 'react';

const Home: FC = (): ReactElement => (
  <main className="flex min-h-screen flex-col items-center p-24">
    <h1 className='text-4xl font-bold'>Bienvenue dans votre Librarie</h1>

    <h1 className='text-xl mt-10'>Ici retrouve tous les livres que nous avons</h1>
    <h1 className='text-xl mt-4'>Connecte toi pour avoir accée aux livres que tu as lu</h1>

    <img src='/chat.png' className='h-60' alt="Chat" />

    
  </main>
);

export default Home;
