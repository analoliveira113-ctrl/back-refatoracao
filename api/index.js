const dotenv = require('dotenv');
const app = require('../app'); // O '../' serve para sair da pasta api e achar o app.js na raiz

dotenv.config();

module.exports = app;