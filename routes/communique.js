const {Router} = require ('express');
const {
  deletecommuniqueController,
  getcommuniqueByIdController,
  patchcommuniqueController,
  postcommuniqueController,
  getcommuniquesController,
} = require ('../controllers/communique');

const router = Router ();

router.get ('/', getcommuniquesController);
router.get ('/:id', getcommuniqueByIdController);
router.post ('/', postcommuniqueController);
router.patch ('/', patchcommuniqueController);
router.delete ('/:id', deletecommuniqueController);

module.exports = router;
