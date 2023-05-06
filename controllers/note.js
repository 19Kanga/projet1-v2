const {
  createnote,
  readnoteById,
  updatenote,
  deletenote,
  readnote,
} = require ('../models/note');

const getnoteByIdController = (req, res) => {
  const id = req.params.id;
  readnoteById (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, note: result});
    }
  });
};

const deletenoteController = (req, res) => {
  const id = req.params.id;
  deletenote (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, message: 'DELETED'});
    }
  });
};

const getnotesController = (req, res) => {
  readnote ((err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, notes: result});
    }
  });
};

const postnoteController = async (req, res) => {
  const body = req.body;
  createnote (body, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

const patchnoteController = (req, res) => {
  const data = req.body;
  updatenote (data, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

module.exports = {
  getnotesController,
  getnoteByIdController,
  postnoteController,
  patchnoteController,
  deletenoteController,
};
