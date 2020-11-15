// Importamos todas las variables de entorno
require('dotenv').config();

const app = require('./app');
// Se ejecuta directamente el archivo database
require('./database');

async function main() {
    await app.listen(app.get('port'));
    console.log(`server on port ${app.get('port')}`);
};

main();

