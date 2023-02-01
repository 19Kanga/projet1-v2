const {
	readSupplierById,
	updateSupplier,
	readSupplier,
	createSupplier,
} = require('../models/supplier');

const getSupplierByIdController = (req, res) => {
	const id = req.params.id;
	readSupplierById(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, Supplier: result });
		}
	});
};

const getSuppliersController = (req, res) => {
	readSupplier((err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, Supplier: result });
		}
	});
};

const postSupplierController = (req, res) => {
	const data = req.body;
	createSupplier(data, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

const patchSupplierController = (req, res) => {
	const data = req.body;
	updateSupplier(data, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

module.exports = {
	getSuppliersController,
	getSupplierByIdController,
	patchSupplierController,
	postSupplierController,
};