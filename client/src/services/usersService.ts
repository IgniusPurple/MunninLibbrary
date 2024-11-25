import axios from "axios";
import API_URL from "../config/apiconfig";

interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
  password_confirmation?: string;
}

export const usersService = {
  getUsers: async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  },

  getUser: async (userId: number) => {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    return response.data;
  },

  createUser: async (user: User) => {
    const response = await axios.post(`${API_URL}/users`, user);
    return response.data;
  },

  updateUser: async (id: number, user: User) => {
    const response = await axios.put(`${API_URL}/users/${id}`, user);
    return response.data;
  },

  deleteUser: async (id: number) => {
    const response = await axios.delete(`${API_URL}/users/${id}`);
    return response.data;
  },

  getUserProfile: async () => {
    const response = await axios.get(`${API_URL}/user/profile`);
    return response.data;
  },

  updateUserProfile: async (userData: any) => {
    const response = await axios.put(`${API_URL}/user/profile`, userData);
    return response.data;
  },
};
