import { FC, ReactElement } from 'react';
import Image from 'next/image';

const Home: FC = (): ReactElement => {
  const userIsLoggedIn = true; // Votre logique de vérification de connexion ici
  const user = {
    name: 'Joachim', // Récupérez le nom de l'utilisateur connecté ici
    book: [],
  };

  return (
    <main>
      {userIsLoggedIn ? (
        <div className="flex min-h-screen flex-col items-center p-24">
          <h1 className="text-4xl font-bold">{`Salut ${user.name}`}</h1>
          <h1 className="text-xl mt-4">
            Nous sommes contents de vous voir de retour
          </h1>
          {/* Affichez la liste des livres ici */}
        </div>
      ) : (
        <div className="flex min-h-screen flex-col items-center p-24">
          <h1 className="text-4xl font-bold">Bienvenue dans votre Librairie</h1>
          <h1 className="text-xl mt-10">
            Ici retrouvez tous les livres que nous avons
          </h1>
          <h1 className="text-xl mt-4">
            Connectez-vous pour avoir accès aux livres que vous avez lus
          </h1>
          <Image
            src="/chat.png"
            width={240}
            height={240}
            className="h-60"
            alt="Chat"
          />
        </div>
      )}
    </main>
  );
};

export default Home;
