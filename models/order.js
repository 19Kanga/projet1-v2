const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createOrder = async (data, callback) => {
	try {
		const order = await prisma.order.create({
			data: data,
		});
		callback(null, order);
	} catch (err) {
		callback(err, null);
	}
};

const readOrder = async (callback) => {
	try {
		const orders = await prisma.order.findMany({ include: { user: true } });
		callback(null, orders);
	} catch (err) {
		callback(err, null);
	}
};

const readOrderById = async (id, callback) => {
	try {
		const order = await prisma.order.findUnique({ where: { id } });
		callback(null, order);
	} catch (err) {
		callback(err, null);
	}
};

const updateOrder = async (data, callback) => {
	try {
		const order = await prisma.order.update({
			data: data,
			where: { id: data.id },
		});
		callback(null, order);
	} catch (err) {
		callback(err, null);
	}
};

const deleteOrder = async (id, callback) => {
	try {
		const order = await prisma.order.delete({
			where: { id },
		});
		callback(null, order);
	} catch (err) {
		callback(err, null);
	}
};

module.exports = {
	createOrder,
	readOrder,
	readOrderById,
	updateOrder,
	deleteOrder,
};