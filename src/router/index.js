const { Router } = require('express');
const router = Router();

const controlador = require('../controller/Admin.controller');

router.get('/', controlador.inicio);
router.post('/', controlador.inicio);
router.get('/admin', controlador.admin);
router.post('/guardar', controlador.guardar);

router.get('contactenos', () => {
    res.sender('Contactenos');
});


module.exports = router;