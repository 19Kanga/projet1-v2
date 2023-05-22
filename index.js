const express = require ('express');
const app = express ();

const env = require ('./config/env');
const {PrismaContext} = require ('./config/prisma');
const cors = require ('cors');

const userRouter = require ('./routes/user');
const authRouter = require ('./routes/auth');
const classeRouter = require ('./routes/classes');
const notesRouter = require ('./routes/note');
const ParentRouter = require ('./routes/parent');
const detailRouter = require ('./routes/detailNote');
const smsRouter = require ('./routes/sms');
const classNoRouter = require ('./routes/searchClassNote');

const startServer = async () => {
  const prisma = new PrismaContext ();
  await prisma.start ();

  app.use ('./uploads', express.static ('uploads'));
  app.use (express.json ());
  app.use (cors ());

  app.use ('/api/sms', smsRouter);
  app.use ('/api/user', userRouter);
  app.use ('/api/auth', authRouter);
  app.use ('/api/Classe', classeRouter);
  app.use ('/api/Note', notesRouter);
  app.use ('/api/Parents', ParentRouter);
  app.use ('/api/detailNote', detailRouter);
  app.use ('/api/ClassNote', classNoRouter);

  app.listen (env.port, () => {
    console.log (`maisoft v2 running on port: ${env.port}`);
  });
};
startServer ();
