const express = require('express');
const app = express();
const { join } = require('path');
const env = require('./config/env');
// const {PrismaContext} = require ('./config/prisma');
const cors = require('cors');
const userRouter = require('./routes/jobPost');


const startServer = async () => {
  // const prisma = new PrismaContext ();
  // await prisma.start ();
  app.use('/uploads', express.static(join(__dirname, 'uploads/')));
  app.use(express.json());
  app.use(cors());
  app.use('/api/jobs', userRouter);

  app.listen(env.port, () => {
    console.log(`maisoft v2 running on port: ${env.port}`);
  });
  // app.listen(env.port)
};
startServer();
