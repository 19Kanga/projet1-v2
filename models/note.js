const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient ();

const createnote = async (data, callback) => {
  try {
    const note = await prisma.note.create ({
      data: data,
    });
    callback (null, note);
  } catch (err) {
    callback (err, null);
  }
};

const readnote = async callback => {
  try {
    const notes = await prisma.note.findMany ({
      include: {user: true},
    });
    callback (null, notes);
  } catch (err) {
    callback (err, null);
  }
};

const readnoteById = async (id, callback) => {
  try {
    const note = await prisma.note.findUnique ({
      where: {id},
      include: {user: true},
    });
    callback (null, note);
  } catch (err) {
    callback (err, null);
  }
};

const updatenote = async (data, callback) => {
  try {
    const note = await prisma.note.update ({
      data: data,
      where: {id: data.id},
    });
    callback (null, note);
  } catch (err) {
    callback (err, null);
  }
};

const deletenote = async (id, callback) => {
  try {
    const note = await prisma.note.delete ({
      where: {id},
    });
    callback (null, note);
  } catch (err) {
    callback (err, null);
  }
};

module.exports = {
  createnote,
  readnote,
  readnoteById,
  updatenote,
  deletenote,
};
