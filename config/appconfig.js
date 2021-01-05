require('dotenv').config();

// config.js
module.exports = {
	app: {
		port: process.env.DEV_APP_PORT || 4000,
		appName: process.env.APP_NAME || 'dremio',
		env: process.env.NODE_ENV || 'development',
    },
    winiston: {
		logpath: '/logs/',
	},
	dremio:{
		baseURL: 'http://18.191.163.39:9047',
		timeout: 2000,
		userName:process.env.DREMIO_USER_NAME||'threezerous',
		password:process.env.DREMIO_PASSWORD||'Welcome1234!',


		
	}

};
