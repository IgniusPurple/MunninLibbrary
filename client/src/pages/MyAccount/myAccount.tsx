import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { usersService } from '../../services/usersService';

const MyAccount: React.FC = () => {
  const [user, setUser] = useState<{ id: number; name: string; email: string }>({ id: 0, name: '', email: '' });
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem('userId'); // Recuperando o ID do usuário logado

      if (!userId) {
        setError('Usuário não autenticado');
        return;
      }

      try {
        const fetchedUser = await usersService.getUser(Number(userId)); // Buscando o usuário com o ID do localStorage
        setUser(fetchedUser);
      } catch (error) {
        setError('Erro ao carregar os dados do usuário');
      }
    };

    fetchUser();
  }, []); // O useEffect roda uma vez quando o componente é montado

  const handleUpdateUser = async () => {
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      const updatedUserData = {
        name: user.name,
        email: user.email,
        password,
      };

      await usersService.updateUser(user.id, updatedUserData); // Atualizando o usuário

      alert('Dados atualizados com sucesso!');
    } catch (error) {
      alert('Erro ao atualizar dados!');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'name') {
      setUser({ ...user, name: value }); // Atualiza o nome diretamente no objeto user
    } else if (name === 'email') {
      setUser({ ...user, email: value }); // Atualiza o email diretamente no objeto user
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  return (
    <div>
      <h2>Minha Conta</h2>
      <Form onSubmit={(e) => { e.preventDefault(); handleUpdateUser(); }}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={user.name} // Preenchendo com dados do banco
            onChange={handleInputChange}
            placeholder="Digite seu nome"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email} // Preenchendo com dados do banco
            onChange={handleInputChange}
            placeholder="Digite seu email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nova Senha</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Digite sua nova senha"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirmar Senha</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirme sua senha"
          />
        </Form.Group>

        {error && <div className="text-danger">{error}</div>}

        <Button type="submit" variant="primary">
          Atualizar Dados
        </Button>
      </Form>
    </div>
  );
};

export default MyAccount;
