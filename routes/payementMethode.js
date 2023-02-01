const { Router } = require('express');
const {
	getPayementByIdController,
	patchPayementController,
	getPayementsController,
    postPayementController
} = require('../controllers/payementMethode');
const { checkAuth } = require('../controllers/check-auth');

const router = Router();

router.get('/',checkAuth, getPayementsController);
router.get('/:id', checkAuth, getPayementByIdController);
router.patch('/', checkAuth,  patchPayementController);
router.post('/', checkAuth,  postPayementController);

module.exports = router;