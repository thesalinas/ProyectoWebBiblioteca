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
controlador.guardar = (req, res) => {
    console.log(req.body);

    db.collection("noticias").doc('VbUXmXZMKSeyyjUR0NqX').set({
        direccion:req.body.txtdire,
        telefono: req.body.txttele,
        conmutador: req.body.txtconmu,
        extencion: req.body.txtext,
        jefe: req.body.txtjefe,
        correojefe: req.body.txtcorrjefe,
        secre: req.body.txtsecre,
        correosecre: req.body.txtcorrsecre      
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Datos agregados correctamente', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });


    res.render('./admin')
}
module.exports = controlador;