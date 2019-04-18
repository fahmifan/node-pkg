const dbConf = require('./database');

const env = process.env.NODE_ENV || 'development';

module.exports = dbConf[env];