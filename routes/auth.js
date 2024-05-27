const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models/db');

const router = express.Router();

// Registrar usuário
router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  db.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', [username, hashedPassword, email], (err, result) => {
    if (err) return res.status(500).send('Erro ao registrar usuário.');
    res.status(200).send('Usuário registrado com sucesso.');
  });
});

// Login do usuário
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Erro no servidor.', redirect: false });
    if (results.length === 0) return res.status(400).json({ message: 'Usuário não encontrado. Deseja se cadastrar?', redirect: true });
    
    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Senha incorreta. Tente novamente.', redirect: false });
    
    const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });
    res.status(200).json({ token });
  });
});

// Alterar senha
router.post('/change-password', (req, res) => {
  const { email, newPassword } = req.body;
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Erro no servidor.', redirect: false });
    if (results.length === 0) return res.status(400).json({ message: 'Email não cadastrado. Deseja se cadastrar?', redirect: true });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    db.query('UPDATE users SET password = ? WHERE email = ?', [hashedPassword, email], (err, result) => {
      if (err) return res.status(500).json({ message: 'Erro ao alterar a senha.', redirect: false });
      res.status(200).json({ message: 'Senha alterada com sucesso.', redirect: false });
    });
  });
});

module.exports = router;
