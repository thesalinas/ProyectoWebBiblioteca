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
    //res.render('./ModuloUsuarios')
    const usuarios= [];
    db.collection("Usuarios").get({
    })
    .then((querySnapshot) => {
        querySnapshot.forEach((doc)=> {
            usuarios.push(doc.data());
        }) ;   
        res.render('./ModuloUsuarios',{usuarios})
    })  
    .catch((error) => {
        console.error("Error: ", error);
    });
}
controlador.ModuloNoticia = (req, res) => {
    //res.render('./ModuloNoticia')
    const noticias= [];
    db.collection("Noticias").get()({
    })
    .then((querySnapshot) => {
        querySnapshot.forEach((doc)=> {
            noticias.push(doc.data());
        }) ;   
        res.render('./ModuloNoticia',{noticias})
    })  
    .catch((error) => {
        console.error("Error: ", error);
    });
}
controlador.ModuloContacto = (req, res) => {
    //res.render('./ModuloContacto')
    const contactos= [];
    db.collection("contacto").get({    
    })
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                contactos.push(doc.data());
            });
            res.render('./ModuloContacto',{contactos:contactos})
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}
controlador.ModuloInfoOrganizacional = (req, res) => {
    //res.render('./ModuloInfoOrganizacional')
    const infoorganizacional= [];
    db.collection("InfoOrganizacional").get({
    })
    .then((querySnapshot) => {
        querySnapshot.forEach((doc)=> {
            infoorganizacional.push(doc.data());
        });
        res.render('./ModuloInfoOrganizacional',{infoorganizacional})     
    })  
    .catch((error) => {
        console.error("Error: ", error);
    });
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


controlador.leercontacto = (req, res) => {
    const contactos= [];
    db.collection("contacto").get({    
    })
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                contactos.push(doc.data());
            });
            res.render('./ModuloContacto',{contactos:contactos})
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
    /*await db.collection("contacto").get()
    .then((querySnapshot) => {
        querySnapshot._snapshot.docChanges.map((value)=> {
            console.log(value.doc.objectValue.proto.mapValue);
            contactos.push(value.doc.objectValue.proto.mapValue.fields);
        })     
    })  
    ;
    console.log(contactos,"R");
    res.render('./ModuloContacto',{contactos})*/
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
    res.render('./ModuloInfoOrganizacional',{contactos})
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
        organigrama: req.body.organigrama,   
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
controlador.leerinfoorganizacional = (req, res) => {
    const infoorganizacional= [];
    db.collection("InfoOrganizacional").get({
    })
    .then((querySnapshot) => {
        querySnapshot.forEach((doc)=> {
            infoorganizacional.push(doc.data());
        });
        res.render('./ModuloInfoOrganizacional',{infoorganizacional})     
    })  
    .catch((error) => {
        console.error("Error: ", error);
    });
}

controlador.guardarNoticia = (req, res) => {
    console.log(req.body);

    db.collection("Noticias").add({
        Titulo:req.body.titulo,
        Descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        autor: req.body.Autor,  
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

controlador.leernoticia = (req, res) => {
    const noticias= [];
    db.collection("Noticias").get({
    })
    .then((querySnapshot) => {
        querySnapshot.forEach((doc)=> {
            noticias.push(doc.data());
        }) ;   
        res.render('./ModuloNoticia',{noticias})
    })  
    .catch((error) => {
        console.error("Error: ", error);
    });
   
}



controlador.registrarUsuario = (req, res) => {
    console.log(req.body);

    db.collection("Usuarios").add({
        Usuario:req.body.nombre,
        Contrasena: req.body.contrasena,
        Contrasena2: req.body.contrasena2,
        Rol: req.body.rols,  
            })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Datos agregados correctamente', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });


    res.render('./Login')
}
controlador.registrarUsuarioAdmi = (req, res) => {
    console.log(req.body);

    db.collection("Usuarios").add({
        Usuario:req.body.nombre,
        Contrasena: req.body.contrasena,
        Contrasena2: req.body.contrasena2,
        Rol: req.body.rols,  
            })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Datos agregados correctamente', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });


    res.render('./ModuloUsuarios')
}


controlador.leerUsuarios = (req, res) => {
    const usuarios= [];
    db.collection("Usuarios").get({
    })
    .then((querySnapshot) => {
        querySnapshot.forEach((doc)=> {
            usuarios.push(doc.data());
        }) ;   
        res.render('./ModuloUsuarios',{usuarios})
    })  
    .catch((error) => {
        console.error("Error: ", error);
    });
}





module.exports = controlador;