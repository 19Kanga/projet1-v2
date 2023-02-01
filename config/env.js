require('dotenv').config();

module.exports = {
	db_host: process.env.DB_HOST,
	db_user: process.env.DB_USER,
	db_password: process.env.DB_PASSWORD,
	db_name: process.env.DB_NAME,
	port: process.env.DB_PORT,
    secret_key: process.env.SECRET_KEY
};
