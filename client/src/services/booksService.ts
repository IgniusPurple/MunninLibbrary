import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Substitua pela URL real do servidor

export const getBooks = async () => {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
};

export const getBookById = async (id: number) => {
    const response = await axios.get(`${API_URL}/books/${id}`);
    return response.data;
};

export const createBook = async (book: { title: string; author: string; description: string }) => {
    const response = await axios.post(`${API_URL}/books`, book);
    return response.data;
};

export const updateBook = async (id: number, book: { title: string; author: string; description: string }) => {
    const response = await axios.put(`${API_URL}/books/${id}`, book);
    return response.data;
};

export const deleteBook = async (id: number) => {
    await axios.delete(`${API_URL}/books/${id}`);
};