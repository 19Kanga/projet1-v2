const { Router } = require('express');
const {
	deleteOrderController,
	getOrderByIdController,
	patchOrderController,
	postOrderController,
	getOrdersController,
} = require('../controllers/order');

const router = Router();

router.get('/', getOrdersController);
router.get('/:id', getOrderByIdController);
router.post('/', postOrderController);
router.patch('/', patchOrderController);
router.delete('/:id', deleteOrderController);

module.exports = router;
