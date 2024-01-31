const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const port = 3000;

// Middleware para aceptar JSON y manejar CORS
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Ruta para obtener todos los personajes
app.get('/characters', async (req, res) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Ruta para obtener un personaje por nombre
app.get('/characters/:name', async (req, res) => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${req.params.name}`);
    res.json(response.data);
  } catch (error) {
    res.status(404).send('Personaje no encontrado');
  }
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});