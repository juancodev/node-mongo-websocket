const db = require('mongoose');

require('dotenv').config();

const hostDB = process.env.DB_HOST;
const userDB = process.env.DB_USER;
const passwordDB = process.env.DB_PASSWORD;

const uri = `mongodb+srv://${userDB}:${passwordDB}@${hostDB}/?retryWrites=true&w=majority`;

db.Promise = global.Promise;

async function connect() {
  await db.connect(uri, {
    useNewUrlParser: true,
  });
  console.log('[db] Connected to mongodb');
}

module.exports = connect;