const { firebase } = require('../configFirebase');

const controlador = {};
const db = firebase.firestore();
const auth = firebase.auth();


controlador.inicio = (req, res) => {
    //res.render('index');
    const noticias = [];
    db.collection("Noticias").get({
    })
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                noticias.push(doc.data());
            });
            res.render('./', { noticias })
        })
        .catch((error) => {
            console.error("Error: ", error);
        });

}


controlador.nosotros = (req, res) => {
    //res.render('index');
    const infoorganizacional = [];
    db.collection("InfoOrganizacional").get({
    })
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                infoorganizacional.push(doc.data());
            });
            res.render('./Mostrarinfo', { infoorganizacional })
        })
        .catch((error) => {
            console.error("Error: ", error);
        });

}


controlador.confooter = (req, res) => {
    //res.render('index');
    const contactos = [];
    db.collection("contacto").get({
    })
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                contactos.push(doc.data());
            });
            //res.render('./layouts/partials/footer.hbs' , {contactos})
            res.render('./MostrarContacto', { contactos })
        })
        .catch((error) => {
            console.error("Error: ", error);
        });

}


controlador.mostrartnoticias = (req, res) => {
    //res.render('index');
    const noticias = [];
    db.collection("Noticias").get({
    })
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                noticias.push(doc.data());
            });
            //res.render('./layouts/partials/footer.hbs' , {contactos})
            res.render('./MostrarNoticias', { noticias })
        })
        .catch((error) => {
            console.error("Error: ", error);
        });

}

controlador.mostrarcontacto = (req, res) => {
    res.render('./MostrarContacto')
}

controlador.mostrarnoticias = (req, res) => {
    res.render('./MostrarNoticias')
}

controlador.mostrarinformacionorganizacional = (req, res) => {
    res.render('./Mostrarinfo')
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
    const usuarios = [];
    db.collection("Usuarios").get({
    })
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                usuarios.push(doc.data());
            });
            res.render('./ModuloUsuarios', { usuarios })
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}
controlador.ModuloNoticia = (req, res) => {
    //res.render('./ModuloNoticia')
    const noticias = [];
    db.collection("Noticias").get({
    })
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, "id");
                let id = doc.id;
                let Titulo = doc.data().Titulo;
                let Descripcion = doc.data().Descripcion;
                let imagen = doc.data().imagen;
                let autor = doc.data().autor;
                let fecha_pub = doc.data().fecha_pub;
                noticia = {
                    id: id,
                    Titulo: Titulo,
                    Descripcion: Descripcion,
                    imagen: imagen,
                    autor: autor,
                    fecha_pub: fecha_pub,
                }

                noticias.push(noticia);

            });
            res.render('./ModuloNoticia', { noticias: noticias })
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}
controlador.ModuloContacto = (req, res) => {
    //res.render('./ModuloContacto')
    const contactos = [];
    db.collection("contacto").get({
    })
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, "id");
                let id = doc.id;
                let direccion = doc.data().direccion;
                let telefono = doc.data().telefono;
                let conmutador = doc.data().conmutador;
                let extencion = doc.data().extencion;
                let jefe = doc.data().jefe;
                let correojefe = doc.data().correojefe;
                let secre = doc.data().secre;
                let correosecre = doc.data().correosecre;
                contacto = {
                    id: id,
                    direccion: direccion,
                    telefono: telefono,
                    conmutador: conmutador,
                    extencion: extencion,
                    jefe: jefe,
                    correojefe: correojefe,
                    secre: secre,
                    correosecre: correosecre
                }

                contactos.push(contacto);

            });
            res.render('./ModuloContacto', { contactos: contactos })
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}
controlador.eliminarcontacto = (req, res) => {
    db.collection("contacto").doc(req.params.id).delete()
        .then(() => {
            res.redirect('/contacto');
        }).catch((error) => {
            console.error("Error: ", error);
        });

}
controlador.ModuloInfoOrganizacional = (req, res) => {

    const infoorganizacional = [];
    db.collection("InfoOrganizacional").get({
    })
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                infoorganizacional.push(doc.data());
                let id = doc.id;
                let mision = doc.data().mision;
                let vision = doc.data().vision;
                let objetivos = doc.data().objetivos;
                let organigrama = doc.data().organigrama;
                informacion = {
                    id: id,
                    mision: mision,
                    vision: vision,
                    objetivos: objetivos,
                    organigrama: organigrama,
                }
                infoorganizacional.push(informacion);
                
            });
            res.render('./ModuloInfoOrganizacional', { infoorganizacional: infoorganizacional })
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}

controlador.MostrarNoticia = (req, res) => {
    res.render('./MostrarNoticia')

}
controlador.guardarcontacto = (req, res) => {
    console.log(req.body);
    db.collection("contacto").add({
        direccion: req.body.txtdire,
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


    res.render('./ModuloContacto')
}


controlador.leercontacto = (req, res) => {
    const contactos = [];
    db.collection("contacto").get({
    })
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, "id");
                let id = doc.id;
                let direccion = doc.data().direccion;
                let telefono = doc.data().telefono;
                let conmutador = doc.data().conmutador;
                let extencion = doc.data().extencion;
                let jefe = doc.data().jefe;
                let correojefe = doc.data().correojefe;
                let secre = doc.data().secre;
                let correosecre = doc.data().correosecre;
                contacto = {
                    id: id,
                    direccion: direccion,
                    telefono: telefono,
                    conmutador: conmutador,
                    extencion: extencion,
                    jefe: jefe,
                    correojefe: correojefe,
                    secre: secre,
                    correosecre: correosecre
                }

                contactos.push(contacto);

            });
            res.render('./ModuloContacto', { contactos: contactos })
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}

controlador.editContacto = (req, res) => {
    var id = req.params.id;
    console.log(id)
    db.collection("contacto").doc(id).get()
        .then((doc) => {
            var id = doc.id;
            var direccion = doc.data().direccion;
            var telefono = doc.data().telefono;
            var conmutador = doc.data().conmutador;
            var extencion = doc.data().extencion;
            var jefe = doc.data().jefe;
            var correojefe = doc.data().correojefe;
            var secre = doc.data().secre;
            var correosecre = doc.data().correosecre;
            res.render('./ActualizarContacto', { direccion, telefono, conmutador, extencion, jefe, correojefe, secre, correosecre, id });
        })
        .catch(function (error) {
            console.log("error :", error);
        })

}

/*controlador.editarcon = (req, res) => {
    console.log(req.params.id, "id");
    db.collection("contacto").doc(req.params.id).get()
        .then((doc) => {
            req.body.idcon = req.params.id,
                req.body.txtdire = doc.data().direccion,
                req.body.txttele = doc.data().telefono,
                req.body.txtconmu = doc.data().conmutador,
                req.body.txtext = doc.data().extencion,
                req.body.txtjefe = doc.data().jefe,
                req.body.txtcorrjefe = doc.data().correojefe,
                req.body.txtsecre = doc.data().secre,
                req.body.txtcorrsecre = doc.data().correosecre

        })
        .catch((error) => {
            console.log("Error: ", error);
        });
}*/

controlador.ActualizarContacto = (req, res) => {
    console.log(req.body);

    db.collection("contacto").doc(req.body.txti).update({
        direccion: req.body.txtdir,
        telefono: req.body.txttel,
        conmutador: req.body.txtconm,
        extencion: req.body.txtex,
        jefe: req.body.txtjef,
        correojefe: req.body.txtcorrjef,
        secre: req.body.txtsecr,
        correosecre: req.body.txtcorrsecr
    })
        .then((docRef) => {
            console.log("Document successfully updated!");
            req.render('./admin');
        })
        .catch((error) => {
            console.error("Error: ", error);
        });


    res.render('./admin')
}

controlador.guardarInfo = (req, res) => {
    console.log(req.body);

    db.collection("InfoOrganizacional").add({
        mision: req.body.mision,
        vision: req.body.vision,
        objetivos: req.body.objetivos,
        organigrama: req.body.organigrama,
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Datos agregados correctamente', docRef.id);
            
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
    res.render('./ModuloInfoOrganizacional')
}

controlador.leerinfoorganizacional = (req, res) => {
    const infoorganizacional = [];
    db.collection("InfoOrganizacional").get({
    })
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                infoorganizacional.push(doc.data());
                let id = doc.id;
                let mision = doc.data().mision;
                let vision = doc.data().vision;
                let objetivos = doc.data().objetivos;
                let organigrama = doc.data().organigrama;
                informacion = {
                    id: id,
                    mision: mision,
                    vision: vision,
                    objetivos: objetivos,
                    organigrama: organigrama,
                }
                infoorganizacional.push(informacion);
            });
            res.render('./ModuloInfoOrganizacional', { infoorganizacional: infoorganizacional })
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}
controlador.eliminarinfoorganizacional = (req, res) => {
    db.collection("InfoOrganizacional").doc(req.params.id).delete()
        .then(() => {
            res.redirect('/informacion');
        }).catch((error) => {
            console.error("Error: ", error);
        });

}
controlador.guardarNoticia = (req, res) => {
    console.log(req.body);

    db.collection("Noticias").add({
        Titulo: req.body.titulo,
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

controlador.leernoticia = (req, res) => {

    const noticias = [];
    db.collection("Noticias").get({
    })
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, "id");
                let id = doc.id;
                let Titulo = doc.data().Titulo;
                let Descripcion = doc.data().Descripcion;
                let imagen = doc.data().imagen;
                let autor = doc.data().autor;
                let fecha_pub = doc.data().fecha_pub;
                noticia = {
                    id: id,
                    Titulo: Titulo,
                    Descripcion: Descripcion,
                    imagen: imagen,
                    autor: autor,
                    fecha_pub: fecha_pub,
                }

                noticias.push(noticia);

            });
            res.render('./ModuloContacto', { noticias: noticias })
        })
        .catch((error) => {
            console.error("Error: ", error);
        });

}

controlador.eliminarnoticia = (req, res) => {
    db.collection("Noticias").doc(req.params.id).delete()
        .then(() => {
            res.redirect('/noticia');
        }).catch((error) => {
            console.error("Error: ", error);
        });

}
controlador.editNoticia = (req, res) => {
    var id = req.params.id;
    console.log(id)
    db.collection("Noticias").doc(id).get()
        .then((doc) => {
            var id = doc.id;
            var titulo = doc.data().Titulo;
            var descrip = doc.data().Descripcion;
            var autor = doc.data().autor;
            var imagen = doc.data().imagen;
            var fecha_pub = doc.data().fecha_pub;
            res.render('./ActualizarNoticia', { titulo, descrip, autor, imagen, fecha_pub, id });
        })
        .catch(function (error) {
            console.log("error :", error);
        })

}
controlador.ActualizarNoticia = (req, res) => {
    console.log(req.body);

    db.collection("Noticias").doc(req.body.id).update({
        Titulo: req.body.titulo,
        Descripcion: req.body.descripcion,
        autor: req.body.autor,
        imagen: req.body.imagen,
        fecha_pub: req.body.fecha
    })
        .then((docRef) => {
            console.log("Document successfully updated!");
            req.render('./admin');
        })
        .catch((error) => {
            console.error("Error: ", error);
        });

    res.render('./admin')
}
controlador.registrarUsuario = (req, res) => {
    console.log(req.body);

    db.collection("Usuarios").add({
        Usuario: req.body.nombre,
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
        Usuario: req.body.nom,
        Contrasena: req.body.contrasena,
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
    const usuarios = [];
    db.collection("Usuarios").get({
    })
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                usuarios.push(doc.data());
            });
            res.render('./ModuloUsuarios', { usuarios })
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}

controlador.registrofirebase = (req, res) => {

    firebase.auth().createUserWithEmailAndPassword(req.body.nom, req.body.con)
        .then(() => {
            console.log("El usuario se ha registrado");
            res.render('./Login')
        })
        .catch(function (error) {
            console.log("Error: ", error.message);
        });
}

controlador.logeado = (req, res) => {
    firebase.auth().signInWithEmailAndPassword(req.body.nomm, req.body.conn)
        .then((user) => {
            console.log("Sesion exitosamente");
            res.render('./admin', user)
        })
        .catch(function (error) {
            console.log("Error: ", error.message);
            res.render('./Login', user)
        });
}


controlador.cerrarsesion = (req, res) => {
    firebase.auth().signOut()
        .then(() => {
            console.log("Sesion cerrada exitosamente");
            res.redirect('./')
        }).catch((error) => {
            console.log(error.message)
        });
}


function estado() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log('usuario logeado');
        }
        else {
            console.log('usuario no logeado');
        }
    });
}


module.exports = controlador;