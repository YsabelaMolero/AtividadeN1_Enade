const express = require('express');
const cors = require('cors');
const app = express();
require('./src/Routes/index')(app); // <--- basta adicionar essa linha
app.use(cors());
app.use(express.json());
app.listen(8082);