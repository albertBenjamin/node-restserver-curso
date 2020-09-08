//Puerto
process.env.PORT = process.env.PORT || 3000;


//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Base de Datos
let urlBD;

if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe';
} else {
    urlBD = process.env.MONGO_URI;
}
//vencimiento del token
// 60 se gundos * 60 minutos * 24 horas * 30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// SECRET DE TOKEN
process.env.SECRET_TOKEN = process.env.SECRET_TOKEN || 'aeiou';

process.env.URLDB = urlBD;
//mongodb: //localhost:27017/cafe

//mongodb + srv: //albert:2S7zrc5F2mkkWf4c@cluster0.9xw5e.mongodb.net/test