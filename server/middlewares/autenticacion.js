const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

// Verificar Token 
let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });
};

// Verifica Role
let verificaAdminRole = (req, res, next) => {

    let usuario = req.usuario;

    if (usuarioDB.role === 'USER_ROLE') {
        return res.json({
            ok: false,
            err: {
                message: 'Usuario no cuenta con los permisos para realizar esta operación'
            }
        });
    }
    next();
};

module.exports = {
    verificaToken,
    verificaAdminRole
}