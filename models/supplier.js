const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createSupplier = async (data, callback) => {
	try {
		const supplier = await prisma.supplier.create({
			data: data,
		});
		callback(null, supplier);
	} catch (err) {
		callback(err, null);
	}
};

const readSupplier = async (callback) => {
	try {
		const suppliers = await prisma.supplier.findMany();
		callback(null, suppliers);
	} catch (err) {
		callback(err, null);
	}
};

const readSupplierById = async (id, callback) => {
	try {
		const supplier = await prisma.supplier.findUnique({ where: { id } });
		callback(null, supplier);
	} catch (err) {
		callback(err, null);
	}
};

const updateSupplier = async (data, callback) => {
	try {
		const supplier = await prisma.supplier.update({
			data: data,
			where: { id: data.id },
		});
		callback(null, supplier);
	} catch (err) {
		callback(err, null);
	}
};

const deleteSupplier = async (id, callback) => {
	try {
		const supplier = await prisma.supplier.delete({
			where: { id },
		});
		callback(null, supplier);
	} catch (err) {
		callback(err, null);
	}
};

module.exports = {
	createSupplier,
	readSupplier,
	readSupplierById,
	updateSupplier,
	deleteSupplier,
};