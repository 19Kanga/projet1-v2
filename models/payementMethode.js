const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createPayement = async (data, callback) => {
	try {
		const payement = await prisma.payementMethode.create({
			data: data,
		});
		callback(null, payement);
	} catch (err) {
		callback(err, null);
	}
};

const readPayement = async (callback) => {
	try {
		const payements = await prisma.payementMethode.findMany();
		callback(null, payements);
	} catch (err) {
		callback(err, null);
	}
};

const readPayementById = async (id, callback) => {
	try {
		const payement = await prisma.payementMethode.findUnique({ where: { id } });
		callback(null, payement);
	} catch (err) {
		callback(err, null);
	}
};

const updatePayement = async (data, callback) => {
	try {
		const payement = await prisma.payementMethode.update({
			data: data,
			where: { id: data.id },
		});
		callback(null, payement);
	} catch (err) {
		callback(err, null);
	}
};

const deletePayement = async (id, callback) => {
	try {
		const payement = await prisma.payementMethode.delete({
			where: { id },
		});
		callback(null, payement);
	} catch (err) {
		callback(err, null);
	}
};

module.exports = {
	createPayement,
	readPayement,
	readPayementById,
	updatePayement,
	deletePayement,
};