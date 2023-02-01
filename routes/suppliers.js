const { Router } = require('express');
const {
	getSupplierByIdController,
	patchSupplierController,
	getSuppliersController,
    postSupplierController
} = require('../controllers/supplier');
const { checkAuth } = require('../controllers/check-auth');

const router = Router();

router.get('/',checkAuth, getSuppliersController);
router.get('/:id', checkAuth, getSupplierByIdController);
router.patch('/', checkAuth,  patchSupplierController);
router.post('/', checkAuth,  postSupplierController);

module.exports = router;