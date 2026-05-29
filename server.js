const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const port = process.env.PORT || 3000;

// O listen só deve rodar se NÃO estiver na Vercel (produção)
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}

// A linha que a Vercel precisa para funcionar:
module.exports = app;