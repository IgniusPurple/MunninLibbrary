import axios from "axios";

interface LoginParams {
  email: string;
  password: string;
}

export const sessionsService = {
  login: async (params: LoginParams) => {
    try {
      const response = await axios.post("/sessions", params);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || { message: "An error occurred while logging in" };
    }
  },

  logout: async () => {
    try {
      const response = await axios.delete("/sessions");
      return response.data;
    } catch (error: any) {
      throw error.response?.data || { message: "An error occurred while logging out" };
    }
  },
};
