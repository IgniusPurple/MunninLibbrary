// src/pages/CreateAccount.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { createAccount } from '../../services/authService'; // Atualizado para usar o serviço de criação de conta

const CreateAccount: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name) newErrors.name = 'O campo Nome é obrigatório.';
    if (!email) newErrors.email = 'O campo Email é obrigatório.';
    if (!password) newErrors.password = 'O campo Senha é obrigatório.';
    if (password && password.length < 4) newErrors.password = 'A senha deve ter pelo menos 4 caracteres.';
    if (password !== confirmPassword) newErrors.confirmPassword = 'As senhas não coincidem.';
    if (!termsAccepted) newErrors.terms = 'Você deve aceitar os termos de serviço.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await createAccount(name, email, password);  // Chamando o serviço de criação de conta
        alert('Conta criada com sucesso!');
        navigate('/login');
      } catch (error) {
        alert('Erro ao criar conta');
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-create-account">
      <div className="w-50 d-flex justify-content-center align-items-center">
        <div className="p-4 bg-light rounded shadow" style={{ width: '80%', maxWidth: '400px' }}>
          <h2 className="text-center mb-4">Crie sua conta</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
              />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
              />
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirme sua senha</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirme sua senha"
              />
              {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="terms">
              <Form.Check
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                label={<span>Concorda com os <Link to="/terms" style={{ color: 'blue' }}>termos de serviço?</Link></span>}
              />
              {errors.terms && <div className="text-danger">{errors.terms}</div>}
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              Criar Conta
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
