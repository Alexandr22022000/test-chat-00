const pg = require('pg'),
    {DATABASE_URL} = require('../constants/constants');


const connectToDatabase = (store) => {
    if (store.pool) return;
    store.pool = pg.Pool({connectionString: DATABASE_URL});
};

const disconnectDatabase = (store) => {
    if (store.sockets.length > 0) return;
    store.pool.end();
    store.pool = undefined;
};

module.exports = {connectToDatabase, disconnectDatabase};