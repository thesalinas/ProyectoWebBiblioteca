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
        })
        .catch((error) => {
            console.error("Error: ", error);
        });


    res.render('./contacto')
}


controlador.leercontacto = async(req, res) => {
    const contactos= [];
    
    await db.collection("contacto").get()
    .then((querySnapshot) => {
        querySnapshot._snapshot.docChanges.map((value)=> {
            console.log(value.doc.objectValue.proto.mapValue);
            contactos.push(value.doc.objectValue.proto.mapValue.fields);
        })     
    })  
    ;
    console.log(contactos,"R");
    res.render('./ModuloContacto',{contactos})
}
controlador.leercontactoinicio = async(req, res) => {
    const contactos= [];
    
    await db.collection("contacto").get()
    .then((querySnapshot) => {
        querySnapshot._snapshot.docChanges.map((value)=> {
            console.log(value.doc.objectValue.proto.mapValue);
            contactos.push(value.doc.objectValue.proto.mapValue.fields);
        })     
    })  
    ;
    console.log(contactos,"R");
    res.render('./',{contactos})
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