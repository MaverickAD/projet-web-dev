import axios from 'axios';
import { PlainUserModel } from '@/models/user.model';

// Fonction pour créer un nouvel utilisateur
export const createUser = async (userData: PlainUserModel) => {
  try {
    const response = await axios.post('http://localhost:3001/users', userData);
    // Vous pouvez gérer la réponse de création ici si nécessaire
    return response.data;
  } catch (error) {
    // Gérez les erreurs en cas d'échec de la création
    throw error;
  }
};
