const {
	createProductCategory,
	readProductCategoryById,
	updateProductCategory,
	deleteProductCategory,
	readProductCategory,
} = require('../models/productCategory');
const { uploader } = require('../config/cloudinary');

const getProductCategoryByIdController = (req, res) => {
	const id = req.params.id;
	readProductCategoryById(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, productCategory: result });
		}
	});
};

const deleteProductCategoryController = (req, res) => {
	const id = req.params.id;
	deleteProductCategory(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, message: 'DELETED' });
		}
	});
};

const getProductCategorysController = (req, res) => {
	readProductCategory((err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, productCategorys: result });
		}
	});
};

const postProductCategoryController = async (req, res) => {
	const body = req.body;
	console.log(req.file)
	const imageRes = await uploader.upload(req.file.path, {
		upload_preset: 'maisoft',
	});
	const thumbnail = imageRes.url;
	console.log(thumbnail);
	const data = { ...body, thumbnail };
	createProductCategory(data, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

const patchProductCategoryController = (req, res) => {
	const data = req.body;
	updateProductCategory(data, (err, result) => {
		if (err) {
			console.log(err);
			res.json({ success: 0 });
		} else {
			res.json({ success: 1, result });
		}
	});
};

module.exports = {
	getProductCategorysController,
	getProductCategoryByIdController,
	postProductCategoryController,
	patchProductCategoryController,
	deleteProductCategoryController,
};