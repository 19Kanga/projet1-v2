const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient ();

const createParent = async (data, callback) => {
  try {
    const Parent = await prisma.parent.create ({
      data: data,
    });
    callback (null, Parent);
  } catch (err) {
    callback (err, null);
  }
};

const readParent = async callback => {
  try {
    const Parents = await prisma.parent.findMany ({include: {User: true}});
    callback (null, Parents);
  } catch (err) {
    callback (err, null);
  }
};

const readParentById = async (id, callback) => {
  try {
    const Parent = await prisma.parent.findUnique ({
      where: {id},
      include: {User: true},
    });
    callback (null, Parent);
  } catch (err) {
    callback (err, null);
  }
};

const updateParent = async (data, callback) => {
  try {
    const Parent = await prisma.parent.update ({
      data: data,
      where: {id: data.id},
    });
    callback (null, Parent);
  } catch (err) {
    callback (err, null);
  }
};

const deleteParent = async (id, callback) => {
  try {
    const Parent = await prisma.parent.delete ({
      where: {id},
    });
    callback (null, Parent);
  } catch (err) {
    callback (err, null);
  }
};

module.exports = {
  createParent,
  readParent,
  readParentById,
  updateParent,
  deleteParent,
};
