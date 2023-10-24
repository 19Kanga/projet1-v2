

const postJobsController = async (req, res) => {
	const profile = req.file.filename;
	const url = req.protocol + '://' + req.get('host') + '/uploads/' + profile
	// console.log(req.protocol + '://' + req.get('host'))
	res.json({ success: 1, profile: url });
};

module.exports = {
	postJobsController
};