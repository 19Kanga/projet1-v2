const {
  createParent,
  readParentById,
  updateParent,
  deleteParent,
  readParent,
} = require ('../models/parent');

const getParentByIdController = (req, res) => {
  const id = req.params.id;
  readParentById (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Parent: result});
    }
  });
};

const deleteParentController = (req, res) => {
  const id = req.params.id;
  deleteParent (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, message: 'DELETED'});
    }
  });
};

const getParentsController = (req, res) => {
  readParent ((err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, Parents: result});
    }
  });
};

const postParentController = async (req, res) => {
  const body = req.body;
  createParent (body, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

const patchParentController = (req, res) => {
  const data = req.body;
  updateParent (data, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

module.exports = {
  getParentsController,
  getParentByIdController,
  postParentController,
  patchParentController,
  deleteParentController,
};
