const { Router } = require('express');
const router = Router();

const controlador = require('../controller/Admin.controller');

router.get('/', controlador.inicio);
router.post('/', controlador.inicio);
router.get('/admin', controlador.admin);
router.get('/contacto', controlador.ModuloContacto);
router.get('/usuarios', controlador.ModuloUsuarios);
router.get('/informacion', controlador.ModuloInfoOrganizacional);
router.post('/guardarcontacto', controlador.guardarcontacto);
router.get('/guardarcontacto', controlador.leercontacto);
module.exports = router;