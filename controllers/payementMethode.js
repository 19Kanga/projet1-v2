const {
	readPayementById,
	updatePayement,
	readPayement,
	createPayement,
} = require('../models/payementMethode');

const getPayementByIdController = (req, res) => {
	const id = req.params.id;
	readPayementById(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, payement_Methode: result });
		}
	});
};

const getPayementsController = (req, res) => {
	readPayement((err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, payement_Methode: result });
		}
	});
};

const postPayementController = (req, res) => {
	const data = req.body;
	createPayement(data, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

const patchPayementController = (req, res) => {
	const data = req.body;
	updatePayement(data, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

module.exports = {
	getPayementsController,
	getPayementByIdController,
	patchPayementController,
	postPayementController,
};