const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	env: {
		API_GATEWAY: isProd ? 'http://localhost:3001/api' : 'http://localhost:3001/api',
	},
};
