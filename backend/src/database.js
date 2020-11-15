const mongoose = require('mongoose');

// process es el objeto global a través del cual, Node tiene acceso a nuestro equipo
const URI = process.env.MONGODB_URI || 'mongodb://localhost/mernstack'; //Se crea automáticamente si no existe.
// Cadena de conexión
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useFindAndModify: false
});


const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected∫');
});
