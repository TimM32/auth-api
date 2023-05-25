'use strict';

require('dotenv').config();
const { db } = require('./src/models');
const server = require('./src/server.js');
const PORT = process.env.PORT || 5002;

db.sync().then(() => {
  server.start(PORT);
});
