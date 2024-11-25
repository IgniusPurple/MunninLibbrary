import axios from "axios";
import API_URL from "../config/apiconfig";

interface LoginParams {
  email: string;
  password: string;
}

export const sessionsService = {
  login: async (params: LoginParams) => {
    const response = await axios.post(`${API_URL}/sessions`, params);
    return response.data;
  },

  logout: async () => {
    const response = await axios.delete(`${API_URL}/sessions`);
    return response.data;
  },
};
