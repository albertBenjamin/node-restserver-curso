//Puerto
process.env.PORT = process.env.PORT || 3000;


//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Base de Datos
let urlBD;

if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe';
} else {
    urlBD = 'mongodb+srv://albert:2S7zrc5F2mkkWf4c@cluster0.9xw5e.mongodb.net/cafe';
}

process.env.URLDB = urlBD;
//mongodb: //localhost:27017/cafe

//mongodb + srv: //albert:2S7zrc5F2mkkWf4c@cluster0.9xw5e.mongodb.net/test