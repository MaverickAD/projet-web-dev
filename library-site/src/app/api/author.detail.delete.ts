import axios from 'axios';

export const useDeleteAuthor = () => {
  const deleteAuthor = async (authorId: string): Promise<any> => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/authors/${authorId}`,
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return deleteAuthor;
};
