const {
	createOrder,
	readOrderById,
	updateOrder,
	deleteOrder,
	readOrder,
} = require('../models/order');

const getOrderByIdController = (req, res) => {
	const id = req.params.id;
	readOrderById(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, order: result });
		}
	});
};

const deleteOrderController = (req, res) => {
	const id = req.params.id;
	deleteOrder(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, message: 'DELETED' });
		}
	});
};

const getOrdersController = (req, res) => {
	readOrder((err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, orders: result });
		}
	});
};

const postOrderController = async (req, res) => {
	const body = req.body;
	createOrder(body, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

const patchOrderController = (req, res) => {
	const data = req.body;
	updateOrder(data, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

module.exports = {
	getOrdersController,
	getOrderByIdController,
	postOrderController,
	patchOrderController,
	deleteOrderController,
};
