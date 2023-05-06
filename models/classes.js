const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient ();

const createClasse = async (data, callback) => {
  try {
    const Classe = await prisma.classes.create ({
      data: data,
    });
    callback (null, Classe);
  } catch (err) {
    callback (err, null);
  }
};

const readClasse = async callback => {
  try {
    const Classes = await prisma.classes.findMany ({
      include: {User: true},
    });
    callback (null, Classes);
  } catch (err) {
    callback (err, null);
  }
};

const readClasseById = async (id, callback) => {
  try {
    const Classe = await prisma.classes.findUnique ({
      where: {id},
      include: {User: true},
    });
    callback (null, Classe);
  } catch (err) {
    callback (err, null);
  }
};

const updateClasse = async (data, callback) => {
  try {
    const Classe = await prisma.classes.update ({
      data: data,
      where: {id: data.id},
    });
    callback (null, Classe);
  } catch (err) {
    callback (err, null);
  }
};

const deleteClasse = async (id, callback) => {
  try {
    const Classe = await prisma.classes.delete ({
      where: {id},
    });
    callback (null, Classe);
  } catch (err) {
    callback (err, null);
  }
};

module.exports = {
  createClasse,
  readClasse,
  readClasseById,
  updateClasse,
  deleteClasse,
};
