const {Router} = require ('express');
const {
  deletedetailnoteController,
  getdetailnoteByIdController,
  patchdetailnoteController,
  postdetailnoteController,
  getdetailnotesController,
} = require ('../controllers/detailNote');

const router = Router ();

router.get ('/', getdetailnotesController);
router.get ('/:id', getdetailnoteByIdController);
router.post ('/', postdetailnoteController);
router.patch ('/', patchdetailnoteController);
router.delete ('/:id', deletedetailnoteController);

module.exports = router;
