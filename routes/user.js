const {Router} = require ('express');
const {
  getUserByIdController,
  patchUserController,
  getUsersController,
} = require ('../controllers/user');
const {checkAuth} = require ('../controllers/check-auth');

const router = Router ();

router.get ('/', getUsersController);
router.get ('/:id', getUserByIdController);
router.patch ('/', patchUserController);

module.exports = router;
