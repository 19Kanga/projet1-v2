const {Router} = require ('express');
const {
  deleteParentController,
  getParentByIdController,
  patchParentController,
  postParentController,
  getParentsController,
} = require ('../controllers/parent');

const router = Router ();

router.get ('/', getParentsController);
router.get ('/:id', getParentByIdController);
router.post ('/', postParentController);
router.patch ('/', patchParentController);
router.delete ('/:id', deleteParentController);

module.exports = router;
