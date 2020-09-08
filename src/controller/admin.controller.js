const { firebase } = require('../configFirebase');

const controlador = {};
const db = firebase.firestore();

controlador.inicio = (req, res) => {
    res.render('index');
}
controlador.admin = (req, res) => {
    res.render('./admin')
}
controlador.Login = (req, res) => {
    res.render('./Login')
}
controlador.Registrarse = (req, res) => {
    res.render('./Registrarse')
}
controlador.ModuloUsuarios = (req, res) => {
    res.render('./ModuloUsuarios')
}
controlador.ModuloNoticia = (req, res) => {
    res.render('./ModuloNoticia')
}
controlador.ModuloContacto = (req, res) => {
    res.render('./ModuloContacto')
}
controlador.ModuloInfoOrganizacional = (req, res) => {
    res.render('./ModuloInfoOrganizacional')
}
controlador.guardarcontacto = (req, res) => {
    console.log(req.body);

    db.collection("contacto").add({
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


    res.render('./ModuloContacto')
}

controlador.leercontacto = (req, res) => {
    console.log(req.body);
    listaContacto.req.body = "";
    
    db.collection("contacto").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                listaContacto.req.body += `
                        <tr>
                            <td>${doc.data().txtdire}</td>
                            <td>${doc.data().txttele}</td>
                            <td>${doc.data().conmutador}</td>
                            <td>${doc.data().extencion}</td>
                            <td>${doc.data().jefe}</td>
                            <td>${doc.data().correojefe}</td>
                            <td>${doc.data().secre}</td>
                            <td>${doc.data().correosecre}</td>

                            <td>
                                <button onclick="eliminar('${doc.id}')" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                                <button onclick="editar('${doc.id}')" class="btn btn-info"><i class="far fa-edit"></i></button>
                            </td>
                        </tr>           
                    `;
            });
        })
        .catch((error) => {
            console.log("Error: ", error);
        });

    res.render('./admin')
}


controlador.actualizarContacto = (req, res) => {
    console.log(req.body);

    db.collection("contacto").doc('RxxrlnHFH6nrfvw0JMO4').set({
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

controlador.guardarInfo = (req, res) => {
    console.log(req.body);

    db.collection("InfoOrganizacional").add({
        mision:req.body.mision,
        vision: req.body.vision,
        objetivos: req.body.objetivos,
        organigrama: organigrama,   
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Datos agregados correctamente', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });


    res.render('./ModuloInfoOrganizacional')
}


controlador.guardarNoticia = (req, res) => {
    console.log(req.body);

    db.collection("Noticias").add({
        Titulo:req.body.Descripcion,
        Descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        autor: req.body.autor,  
        fecha_pub: req.body.fecha, 
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Datos agregados correctamente', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });


    res.render('./ModuloNoticia')
}






module.exports = controlador;