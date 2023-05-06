const {Router} = require ('express');
const {
  getnoteByIdController,
  patchnoteController,
  getnotesController,
  postnoteController,
} = require ('../controllers/note');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.get ('/', getnotesController);
router.get ('/:id', getnoteByIdController);
router.patch ('/', patchnoteController);
router.post ('/', postnoteController);

module.exports = router;
