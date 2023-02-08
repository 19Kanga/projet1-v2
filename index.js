const express = require('express');
const app = express();

const env = require('./config/env');
const { PrismaContext } = require('./config/prisma');

const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const payementRouter = require('./routes/payementMethode');
const supplierRouter = require('./routes/suppliers');
const orderRouter = require('./routes/order');
const productCategoryRouter = require('./routes/productCategory');

const startServer = async () => {
	const prisma = new PrismaContext();
	await prisma.start();

	app.use('./uploads', express.static('uploads'));
	app.use(express.json());
	

	app.use('/api/user', userRouter);
	app.use('/api/auth', authRouter);
	app.use('/api/payement', payementRouter);
	app.use('/api/supplier', supplierRouter);
	app.use('/api/orders', orderRouter);
	app.use('/api/category', productCategoryRouter);


	app.listen(env.port, () => {
		console.log(`maisoft v2 running on port: ${env.port}`);
	});
};
startServer();