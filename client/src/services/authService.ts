import axios from "axios";
import API_URL from "../config/apiconfig";

export const authService = {
  register: async (user: { name: string; email: string; password: string }) => {
    const response = await axios.post(`${API_URL}/auth/register`, user);
    return response.data;
  },

  login: async (credentials: { email: string; password: string }) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
  },

  logout: async () => {
    const response = await axios.post(`${API_URL}/auth/logout`);
    return response.data;
  },

  getLoggedInUser: async () => {
    const response = await axios.get(`${API_URL}/auth/me`);
    return response.data;
  },
};
