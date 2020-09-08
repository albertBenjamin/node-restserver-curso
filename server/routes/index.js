const express = require('express');
const app = express();

//para exponer rutas
app.use(require('./usuario'));
app.use(require('./login'));



module.exports = app;