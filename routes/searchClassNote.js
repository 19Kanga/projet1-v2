const {Router} = require ('express');
const {getnoteByIdController} = require ('../controllers/searchNoteClasse');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

// router.get ('/', getnotesController);
router.get ('/:id', getnoteByIdController);
// router.patch ('/', patchnoteController);
// router.post ('/', postnoteController);

module.exports = router;
