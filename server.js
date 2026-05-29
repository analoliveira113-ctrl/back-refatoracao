const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const categoriasRouter = require('./routes/categorias');
const produtosRouter = require('./routes/produtos');
const pedidosRouter = require('./routes/pedidos');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'API backend funcionando' });
});

app.use('/categorias', categoriasRouter);
app.use('/produtos', produtosRouter);
app.use('/pedidos', pedidosRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Rota n�o encontrada' });
});

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
