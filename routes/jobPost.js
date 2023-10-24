const { Router } = require('express');
const { postJobsController } = require('../controllers/jobPost');
const { upload } = require('../utils/upload');

const router = Router();

router.post('/PostProfile', upload.single('jobs'), postJobsController);

module.exports = router;
