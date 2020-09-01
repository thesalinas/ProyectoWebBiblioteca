const { firebase } = require('../configFirebase');

const controlador = {};
const db = firebase.firestore();

controlador.inicio = (req, res) => {
    res.render('index');
}
controlador.admin = (req, res) => {
    res.render('./admin')
}
controlador.ModuloUsuarios = (req, res) => {
    res.render('./ModuloUsuarios')
}
controlador.ModuloContacto = (req, res) => {
    res.render('./ModuloContacto')
}
controlador.ModuloInfoOrganizacional = (req, res) => {
    res.render('./ModuloInfoOrganizacional')
}

module.exports = controlador;