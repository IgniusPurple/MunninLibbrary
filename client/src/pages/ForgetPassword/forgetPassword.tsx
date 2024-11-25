// src/pages/ForgetPassword.tsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { resetPassword } from '../../services/authService'; // Atualizado para importar o serviço de reset

const ForgetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState(Array(6).fill(''));
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  // Ref com tipo explicitamente definido como HTMLInputElement ou null
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);


  const  validateEmail = (email: string)  => {
    // Todo: Implementar uma validação de e-mail mais robusta, regex é sempre um problema no futuro
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleEmailSubmit = () => {
    if (validateEmail(email)) {
      setCodeSent(true);
      setError('');
    } else {
      setError('Por favor, insira um e-mail válido.');
    }
  };

  const handleCodeChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      } else if (!value && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };


  const handlePasswordChange = async () => {
    setError('');
    setSuccessMessage('');

    if (verificationCode.includes('')) {
      setError('Preencha o código.');
    } else if (newPassword !== confirmPassword) {
      setError('As senhas não coincidem.');
    } else if (!newPassword || !confirmPassword) {
      setError('As senhas devem ser preenchidas.');
    } else {
      try {
        await resetPassword(email, newPassword);  // Integrando o serviço de reset de senha
        setSuccessMessage('Senha alterada com sucesso!');
        setTimeout(() => navigate('/login'), 1300);
      } catch (err) {
        setError('Erro ao redefinir a senha.');
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-background">
      <div className="p-4 bg-light rounded shadow text-verification">
        {!codeSent ? (
          <>
            <p className="text-center mb-4">Vamos enviar um código de verificação para seu e-mail</p>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
              />
              {error && <div className="text-danger mt-2">{error}</div>}
            </Form.Group>
            <Button variant="primary" className="w-100" onClick={handleEmailSubmit}>
              Solicitar Código
            </Button>
          </>
        ) : (
          <>
            <h4 className="text-center mb-4">Código de Verificação</h4>
            <InputGroup className="d-flex justify-content-center mb-3 text-verification-code">
              {verificationCode.map((digit, index) => (
                <Form.Control
                  key={index}
                  ref={(el: HTMLInputElement | null) => (inputRefs.current[index] = el)}  // Tipo de 'el' explicitamente definido
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  className="text-center box-code"
                />
              ))}
            </InputGroup>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Nova senha"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Confirmar nova senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {error && <div className="text-danger mt-2">{error}</div>}
            </Form.Group>
            {successMessage && (
              <div className="text-success text-center mt-2">
                {successMessage}
                <div>Aguarde um instante</div>
              </div>
            )}
            <Button variant="primary" className="w-100" onClick={handlePasswordChange}>
              Alterar Senha
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
