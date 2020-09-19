const { Router } = require('express');
const router = Router();

const { firebase } = require('../configFirebase');


const db = firebase.firestore();

const controlador = require('../controller/Admin.controller');

router.get('/', controlador.inicio);
router.post('/', controlador.inicio);
router.get('/mostrarinformacionorganizacional', controlador.nosotros);
router.get('/mostrarcontacto', controlador.confooter);
router.get('/mostrarnoticias', controlador.mostrartnoticias);


router.get('/admin', controlador.admin);
router.get('/contacto', controlador.ModuloContacto);

router.get('/noticia', controlador.ModuloNoticia);
router.get('/Login', controlador.Login);
router.get('/Registrarse', controlador.Registrarse);
router.get('/mostrarcontacto', controlador.mostrarcontacto);
router.get('/mostrarinformacionorganizacional', controlador.mostrarinformacionorganizacional);
router.get('/mostrarnoticias', controlador.mostrarnoticias);
router.get('/usuarios', controlador.ModuloUsuarios);
router.get('/informacion', controlador.ModuloInfoOrganizacional);
router.post('/guardarcontacto', controlador.guardarcontacto);
router.get('/guardarcontacto', controlador.leercontacto);
router.post('/guardarInfo', controlador.guardarInfo);
router.get('/guardarInfo', controlador.leerinfoorganizacional);
router.post('/guardarNoticia', controlador.guardarNoticia);
router.get('/guardarNoticia', controlador.leernoticia);

//router.get('/rta/:id', controlador.editarcon);

router.post('/registrarUsuario', controlador.registrofirebase);

router.get('/registrarUsuarioAdmi', controlador.leerUsuarios);
router.post('/registrarUsuarioAdmi', controlador.registrarUsuarioAdmi);

router.get('/registrofirebase', controlador.registrofirebase);
router.post('/regis', controlador.registrofirebase);
router.post('/loge', controlador.logeado);

router.get('/deleteContacto/:id', controlador.eliminarcontacto);
router.get('/deleteNoticia/:id', controlador.eliminarnoticia);
router.get('/deleteInformacion/:id', controlador.eliminarinfoorganizacional);

router.get('/editContacto/:id', controlador.editContacto);
router.get('/editNoticia/:id', controlador.editNoticia);
router.post('/ActualizarContacto',controlador.ActualizarContacto);
router.post('/ActualizarNoticia',controlador.ActualizarNoticia);

router.get('/cerrarSesion' , controlador.cerrarsesion);

module.exports = router;