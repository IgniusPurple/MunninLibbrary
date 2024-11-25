import axios from "axios";
import API_URL from "../config/apiconfig";

export const bookService = {
  getBooks: async () => {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
  },

  getBookById: async (id: number) => {
    const response = await axios.get(`${API_URL}/books/${id}`);
    return response.data;
  },

  createBook: async (book: { title: string; author: string; description: string }) => {
    const response = await axios.post(`${API_URL}/books`, book);
    return response.data;
  },

  updateBook: async (id: number, book: { title: string; author: string; description: string }) => {
    const response = await axios.put(`${API_URL}/books/${id}`, book);
    return response.data;
  },

  deleteBook: async (id: number) => {
    await axios.delete(`${API_URL}/books/${id}`);
  },
};
