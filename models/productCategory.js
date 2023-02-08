const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createProductCategory = async (data, callback) => {
	try {
		const productCategory = await prisma.productCategory.create({
			data: data,
		});
		callback(null, productCategory);
	} catch (err) {
		callback(err, null);
	}
};

const readProductCategory = async (callback) => {
	try {
		const productCategorys = await prisma.productCategory.findMany();
		callback(null, productCategorys);
	} catch (err) {
		callback(err, null);
	}
};

const readProductCategoryById = async (id, callback) => {
	try {
		const productCategory = await prisma.productCategory.findUnique({ where: { id } });
		callback(null, productCategory);
	} catch (err) {
		callback(err, null);
	}
};

const updateProductCategory = async (data, callback) => {
	try {
		const productCategory = await prisma.productCategory.update({
			data: data,
			where: { id: data.id },
		});
		callback(null, productCategory);
	} catch (err) {
		callback(err, null);
	}
};

const deleteProductCategory = async (id, callback) => {
	try {
		const productCategory = await prisma.productCategory.delete({
			where: { id },
		});
		callback(null, productCategory);
	} catch (err) {
		callback(err, null);
	}
};

module.exports = {
	createProductCategory,
	readProductCategory,
	readProductCategoryById,
	updateProductCategory,
	deleteProductCategory,
};
