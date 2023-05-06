const {
  createcommunique,
  readcommuniqueById,
  updatecommunique,
  deletecommunique,
  readcommunique,
} = require ('../models/communique');

const getcommuniqueByIdController = (req, res) => {
  const id = req.params.id;
  readcommuniqueById (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, communique: result});
    }
  });
};

const deletecommuniqueController = (req, res) => {
  const id = req.params.id;
  deletecommunique (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, message: 'DELETED'});
    }
  });
};

const getcommuniquesController = (req, res) => {
  readcommunique ((err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, communiques: result});
    }
  });
};

const postcommuniqueController = async (req, res) => {
  const body = req.body;
  createcommunique (body, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

const patchcommuniqueController = (req, res) => {
  const data = req.body;
  updatecommunique (data, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

module.exports = {
  getcommuniquesController,
  getcommuniqueByIdController,
  postcommuniqueController,
  patchcommuniqueController,
  deletecommuniqueController,
};
