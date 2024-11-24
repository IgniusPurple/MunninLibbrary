import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import userProfilePic from '../../assets/lais.png';
import './styles.css';

const MyAccount: React.FC = () => {
  const initialUserData = {
    name: 'Laís Oliveira',
    email: 'lais.oliveira@example.com',
    street: 'Rua das Flores, 123',
    cep: '75084-080'
  };

  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    street: '',
    cep: ''
  });
  
  const [backgroundColors, setBackgroundColors] = useState<string[]>([]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const validateFields = () => {
    const newErrors: any = {};
    if (!userData.name) newErrors.name = 'Nome é obrigatório.';
    if (!userData.email || !/\S+@\S+\.\S+/.test(userData.email)) newErrors.email = 'Email inválido.';
    if (!userData.cep) newErrors.cep = 'CEP é obrigatório.';
    if (!userData.street) newErrors.street = 'Rua é obrigatória.';
    
    setErrors(newErrors);
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateFields()) {
      setIsEditing(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof typeof userData) => {
    setUserData({
      ...userData,
      [field]: e.target.value
    });
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;


    const cleanValue = value.replace(/\D/g, '');

    const formattedCep = cleanValue
      .slice(0, 8) 
      .replace(/(\d{5})(\d{3})/, '$1-$2'); 
    
    setUserData({ ...userData, cep: formattedCep });
  };

  useEffect(() => {
    const colors = [
      ['#3B2A24', '#C4B6A6'],
      ['#2C3E50', '#ECF0F1'],
      ['#34495E', '#BDC3C7'],
      ['#4B3C32', '#E6B89C'],
      ['#2E2A26', '#D6D6D6'],
      ['#3E2723', '#BCAAA4'],
      ['#1F3A3D', '#A2C2C2'],
      ['#3F3D37', '#E6E5E2'],
      ['#2A2D34', '#B4B7B9'],
      ['#212F3C', '#AAB8C2'],
      ['#4A4E69', '#C9CBA3'],
      ['#343B3F', '#F0E5C2'],
      ['#4B4F54', '#E7C6B8'],
      ['#383838', '#D6D6D6'],
      ['#232E31', '#B7D3B3'],
      ['#2B2D42', '#8D99AE']
    ];

    const getRandomColorPair = () => {
      return colors[Math.floor(Math.random() * colors.length)];
    };

    setBackgroundColors(getRandomColorPair());
  }, []);

  const [color1, color2] = backgroundColors;

  const backgroundStyle = {
    background: `linear-gradient(to bottom, ${color1}, ${color2})`,
    minHeight: '100vh',
  };

  return (
    <div style={backgroundStyle} className="d-flex justify-content-center align-items-center">
      <Card className="account-card p-4 w-75" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
        <div className="text-center mb-4">
          <img
            src={userProfilePic}
            alt="Foto de Perfil"
            className="rounded-circle"
            style={{ width: '7rem', height: '7rem', objectFit: 'cover' }}
          />
        </div>

        <Form>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              value={userData.name}
              readOnly={!isEditing}
              onChange={(e) => handleChange(e, 'name')}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={userData.email}
              readOnly={!isEditing}
              onChange={(e) => handleChange(e, 'email')}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formStreet" className="mb-3">
            <Form.Label>Rua</Form.Label>
            <Form.Control
              type="text"
              value={userData.street}
              readOnly={!isEditing}
              onChange={(e) => handleChange(e, 'street')}
              isInvalid={!!errors.street}
            />
            <Form.Control.Feedback type="invalid">
              {errors.street}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formCep" className="mb-3">
            <Form.Label>CEP</Form.Label>
            <Form.Control
              type="text"
              value={userData.cep}
              readOnly={!isEditing}
              onChange={handleCepChange}
              maxLength={10} 
              isInvalid={!!errors.cep}
            />
            <Form.Control.Feedback type="invalid">
              {errors.cep}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-flex justify-content-end">
            {!isEditing ? (
              <Button variant="primary" onClick={handleEdit}>
                Editar
              </Button>
            ) : (
              <Button variant="success" onClick={handleSave}>
                Salvar
              </Button>
            )}
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default MyAccount;
