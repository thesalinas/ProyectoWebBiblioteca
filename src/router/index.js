const { Router } = require('express');
const router = Router();

const controlador = require('../controller/Admin.controller');

router.get('/', controlador.inicio);
router.post('/', controlador.inicio);
router.get('/', controlador.leercontactoinicio);
router.get('/admin', controlador.admin);
router.get('/contacto', controlador.ModuloContacto);
router.get('/noticia', controlador.ModuloNoticia);
router.get('/Login', controlador.Login);
router.get('/Registrarse', controlador.Registrarse);
router.get('/usuarios', controlador.ModuloUsuarios);
router.get('/informacion', controlador.ModuloInfoOrganizacional);
router.post('/guardarcontacto', controlador.guardarcontacto);
router.get('/guardarcontacto', controlador.leercontacto);
router.post('/guardarInfo', controlador.guardarInfo);
router.post('/guardarNoticia', controlador.guardarNoticia);
router.get('/guardarNoticia', controlador.leernoticia);

router.post('/registrarUsuario', controlador.registrarUsuario);

module.exports = router;