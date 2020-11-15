const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// settings
app.set('port',process.env.PORT || 4000);

// middlewares Se ejecute antes (servidor local de webpack y servidor node)

// cors -ª 2 servidores puedas intercambiar datos
app.use(cors());

// Nos muestra logs HTTP
app.use(morgan());

//Devuelvo datos en json
app.use(express.json());


// routes
// app.get('/api/users', (req,res) => res.send('Users Routes'));
// app.get('/api/products', (req,res) => res.send('Products Routes'));

app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));


module.exports = app;
