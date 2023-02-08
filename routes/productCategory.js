const { Router } = require('express');
const {
	deleteProductCategoryController,
	getProductCategoryByIdController,
	patchProductCategoryController,
	postProductCategoryController,
	getProductCategorysController,
} = require('../controllers/productCategory');
const { upload } = require('../utils/upload');
const router = Router();

router.get('/',  getProductCategorysController);
router.get('/:id', getProductCategoryByIdController);
router.post('/', upload.single('image'), postProductCategoryController);
router.patch('/', patchProductCategoryController);
router.delete('/:id', deleteProductCategoryController);

module.exports = router;