const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Me quiero morir, esto no es un meme jaja. Todos los derechos reservados.');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});