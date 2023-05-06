const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient ();

const createcommunique = async (data, callback) => {
  try {
    const communique = await prisma.communique.create ({
      data: data,
    });
    callback (null, communique);
  } catch (err) {
    callback (err, null);
  }
};

const readcommunique = async callback => {
  try {
    const communiques = await prisma.communique.findMany ({});
    callback (null, communiques);
  } catch (err) {
    callback (err, null);
  }
};

const readcommuniqueById = async (id, callback) => {
  try {
    const communique = await prisma.communique.findUnique ({where: {id}});
    callback (null, communique);
  } catch (err) {
    callback (err, null);
  }
};

const updatecommunique = async (data, callback) => {
  try {
    const communique = await prisma.communique.update ({
      data: data,
      where: {id: data.id},
    });
    callback (null, communique);
  } catch (err) {
    callback (err, null);
  }
};

const deletecommunique = async (id, callback) => {
  try {
    const communique = await prisma.communique.delete ({
      where: {id},
    });
    callback (null, communique);
  } catch (err) {
    callback (err, null);
  }
};

module.exports = {
  createcommunique,
  readcommunique,
  readcommuniqueById,
  updatecommunique,
  deletecommunique,
};
