const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Token que pusiste en Meta
const VERIFY_TOKEN = 'eliascontigo';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor funcionando: Elías Contigo 🌟');
});

app.get('/whatsapp', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('WEBHOOK_VERIFICADO');
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
