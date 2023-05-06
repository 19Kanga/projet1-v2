const {config, uploader} = require('cloudinary').v2;
const { cloudinary_key, cloudinary_name, cloudinary_secret } = require('./env');

config({
	cloud_name: cloudinary_name,
	api_key: cloudinary_key,
	api_secret: cloudinary_secret,
});

module.exports = { uploader };