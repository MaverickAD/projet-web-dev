import axios from 'axios';

export const useDeleteBook = () => {
  const deleteBook = async (bookId: string) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/books/${bookId}`,
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return deleteBook;
};
