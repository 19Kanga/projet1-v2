const { Router } = require('express');
const {
	sms
} = require('../controllers/sendSms');

const router = Router();

router.get('/', sms);

module.exports = router;
