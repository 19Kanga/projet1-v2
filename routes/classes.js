const {Router} = require ('express');
const {
  getClasseByIdController,
  patchClasseController,
  getClassesController,
  postClasseController,
} = require ('../controllers/classes');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.get ('/', getClassesController);
router.get ('/:id', getClasseByIdController);
router.patch ('/', patchClasseController);
router.post ('/', postClasseController);

module.exports = router;
