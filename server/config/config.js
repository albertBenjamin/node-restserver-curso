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

process.env.URLDB = urlBD;
//mongodb: //localhost:27017/cafe

//vencimiento del token
// 60 se gundos * 60 minutos * 24 horas * 30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// SECRET DE TOKEN
process.env.SECRET_TOKEN = process.env.SECRET_TOKEN || 'aeiou';


//Google client Id
process.env.CLIENT_ID = process.env.CLIENT_ID || '317902030202-e14qen88c7mllrfm8nsqtui3k35qc9eb.apps.googleusercontent.com';