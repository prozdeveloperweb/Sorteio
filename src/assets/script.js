const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


const dbConfig = {
  host: '127.0.0.1:3306',
  user: 'root',
  password: '',
  database: 'new connection 1'
};


const connection = mysql.createConnection(dbConfig);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Preencha todos os campos.' });
  }

  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  connection.query(query, [username, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Erro ao registrar o usuário.' });
    }

    return res.json({ message: 'Registro bem-sucedido.' });
  });
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Preencha todos os campos.' });
  }

  
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  connection.query(query, [username, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Erro ao fazer login.' });
    }

    if (results.length > 0) {
      return res.json({ message: 'Login bem-sucedido.' });
    } else {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
