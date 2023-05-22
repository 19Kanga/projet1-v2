const {readnoteByClassId} = require ('../models/note');

const getnoteByIdController = (req, res) => {
  const id = req.params.id;
  readnoteByClassId (id, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.json ({success: 1, note: result});
    }
  });
};

// const getnotesController = (req, res) => {
//   readnote ((err, result) => {
//     if (err) {
//       console.log (err);
//     } else {
//       res.json ({success: 1, notes: result});
//     }
//   });
// };

module.exports = {
  getnoteByIdController,
};
