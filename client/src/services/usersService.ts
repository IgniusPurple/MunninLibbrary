import axios from "axios";

interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
  password_confirmation?: string;
}

export const usersService = {
  getUsers: async () => {
    try {
      const response = await axios.get("/users");
      return response.data;
    } catch (error: any) {
      throw error.response?.data || { message: "An error occurred while fetching users" };
    }
  },
  getUser: async (userId: number) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      return response.data; // Retorna os dados do usuário
    } catch (error) {
      throw new Error('Erro ao carregar dados do usuário');
    }
  },

  createUser: async (user: User) => {
    try {
      const response = await axios.post("/users", user);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || { message: "An error occurred while creating the user" };
    }
  },

  updateUser: async (id: number, user: User) => {
    try {
      const response = await axios.put(`/users/${id}`, user);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || { message: "An error occurred while updating the user" };
    }
  },

  deleteUser: async (id: number) => {
    try {
      const response = await axios.delete(`/users/${id}`);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || { message: "An error occurred while deleting the user" };
    }
  },
  
};

// Função para obter o perfil do usuário
export const getUserProfile = async () => {
  try {
    const response = await axios.get('/api/user/profile'); // Substitua pela URL de sua API
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar perfil.');
  }
};

// Função para atualizar o perfil do usuário
export const updateUserProfile = async (userData: any) => {
  try {
    const response = await axios.put('/api/user/profile', userData); // Substitua pela URL de sua API
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar perfil.');
  }
};
