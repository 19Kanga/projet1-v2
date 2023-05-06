const {
  readClasseById,
  updateClasse,
  readClasse,
  createClasse,
} = require ('../models/classes');

const getClasseByIdController = (req, res) => {
  const id = req.params.id;
  readClasseById (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, classe: result});
    }
  });
};

const getClassesController = (req, res) => {
  readClasse ((err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, classe: result});
    }
  });
};

const postClasseController = (req, res) => {
  const data = req.body;
  createClasse (data, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

const patchClasseController = (req, res) => {
  const data = req.body;
  updateClasse (data, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

module.exports = {
  getClassesController,
  getClasseByIdController,
  patchClasseController,
  postClasseController,
};
