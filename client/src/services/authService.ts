// src/services/authService.ts
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Substitua pela URL da sua API

// Função para realizar login
export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // Retorna os dados do usuário ou um token JWT
  } catch (error) {
    throw new Error('Falha ao realizar login');
  }
};

// Função para realizar o login com dados fictícios (caso não tenha back-end ainda)
export const loginMock = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    if (email === 'usuario@example.com' && password === '123456') {
      resolve({ token: 'mock-jwt-token' });
    } else {
      reject('Email ou senha incorretos.');
    }
  });
};

// Função para enviar o código de recuperação de senha
export const sendRecoveryCode = async (email: string) => {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao enviar código de recuperação');
  }
};

// Função para realizar a recuperação de senha
export const resetPassword = async (code: string, newPassword: string) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, { code, newPassword });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao redefinir senha');
  }
};

export const createAccount = async (name: string, email: string, password: string) => {
  try {
    const response = await axios.post('/api/auth/create-account', { name, email, password });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar conta');
  }
};