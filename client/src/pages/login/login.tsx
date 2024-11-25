import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Card, InputGroup } from 'react-bootstrap';
import { Eye, EyeSlash } from 'phosphor-react';
import { login } from '../../services/authService';

import './styles.css';
import corvoImg from '../../assets/corvo.png';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const isAuthenticated = await login(email, password);
      if (isAuthenticated) {
        navigate('/home'); 
      } else {
        alert('Email ou senha incorretos.');
      }
    } catch (error) {
      console.error('Erro ao autenticar:', error);
      alert('Ocorreu um erro ao tentar realizar o login.');
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center min-vh-100">
      <img src={corvoImg} alt="Logo" className="corvo-img" />
      <Card className="login-card text-center">
        <Card.Body>
          <Card.Title as="h2" className="mb-3">Login</Card.Title>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="email" className="mb-3 text-start">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email"
                placeholder="Coloque seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password" className="mb-3 text-start">
              <Form.Label>Senha</Form.Label>
              <InputGroup>
                <Form.Control 
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Coloque sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-label="Password"
                />
                <InputGroup.Text 
                  onClick={togglePasswordVisibility}
                  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  {passwordVisible ? <EyeSlash size={20} /> : <Eye size={20} />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <div className="d-flex justify-content-between mt-2">
              <Link to="/forgetPassword" style={{ color: 'gray' }}>Esqueceu Sua Senha?</Link>
              <Link to="/createAccount" style={{ color: 'blue' }}>Criar conta</Link>
            </div>

            <Button type="submit" variant="primary" className="w-100 mt-3">Entrar</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
