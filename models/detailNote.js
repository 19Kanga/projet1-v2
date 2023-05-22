const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient ();

const createdetailnote = async (data, callback) => {
  try {
    const detailnote = await prisma.detailNote.create ({
      data: data,
    });
    callback (null, detailnote);
  } catch (err) {
    callback (err, null);
  }
};

const readdetailnote = async callback => {
  try {
    const detailnotes = await prisma.detailNote.findMany ({
      include: {Note: true},
    });
    callback (null, detailnotes);
  } catch (err) {
    callback (err, null);
  }
};

const readdetailnoteById = async (id, callback) => {
  try {
    const detailnote = await prisma.detailNote.findMany ({
      where: {noteId: id},
    });
    callback (null, detailnote);
  } catch (err) {
    callback (err, null);
  }
};

const updatedetailnote = async (data, callback) => {
  try {
    const detailnote = await prisma.detailNote.update ({
      data: data,
      where: {id: data.id},
    });
    callback (null, detailnote);
  } catch (err) {
    callback (err, null);
  }
};

const deletedetailnote = async (id, callback) => {
  try {
    const detailnote = await prisma.detailNote.delete ({
      where: {id},
    });
    callback (null, detailnote);
  } catch (err) {
    callback (err, null);
  }
};

module.exports = {
  createdetailnote,
  readdetailnote,
  readdetailnoteById,
  updatedetailnote,
  deletedetailnote,
};
