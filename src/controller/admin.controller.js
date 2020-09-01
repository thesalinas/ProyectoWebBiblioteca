const { firebase } = require('../configFirebase');

const controlador = {};
const db = firebase.firestore();

controlador.inicio = (req, res) => {
    res.render('index');
}

controlador.admin = (req, res) => {
    res.render('./admin', { nombre: 'Roberto' })
}

controlador.guardar = (req, res) => {
    console.log(req.body);

    db.collection("algo").doc('8798').set({
        nombre: req.body.buscar,
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Datos agregados correctamente', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });


    res.render('./admin', { nombre: 'Roberto' })
}


module.exports = controlador;