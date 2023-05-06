const {
  createdetailnote,
  readdetailnoteById,
  updatedetailnote,
  deletedetailnote,
  readdetailnote,
} = require ('../models/detailNote');

const getdetailnoteByIdController = (req, res) => {
  const id = req.params.id;
  readdetailnoteById (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, detailnote: result});
    }
  });
};

const deletedetailnoteController = (req, res) => {
  const id = req.params.id;
  deletedetailnote (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, message: 'DELETED'});
    }
  });
};

const getdetailnotesController = (req, res) => {
  readdetailnote ((err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, detailnotes: result});
    }
  });
};

const postdetailnoteController = async (req, res) => {
  const body = req.body;
  createdetailnote (body, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

const patchdetailnoteController = (req, res) => {
  const data = req.body;
  updatedetailnote (data, (err, result) => {
    if (err) {
      console.log (err);
      res.json ({success: 0});
    } else {
      res.json ({success: 1, result});
    }
  });
};

module.exports = {
  getdetailnotesController,
  getdetailnoteByIdController,
  postdetailnoteController,
  patchdetailnoteController,
  deletedetailnoteController,
};
