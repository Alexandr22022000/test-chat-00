const pg = require('pg');

const databaseUrl = process.env.DATABASE_URL || 'postgres://upuintiopcoste:1b420313061f8fe99c2aa500e3404b54b7410e93e8c5497a018d6db703224a7d@ec2-54-221-221-153.compute-1.amazonaws.com:5432/d3j828vtt9vpnn';


const connectToDatabase = (store) => {
    if (store.pool) return;
    store.pool = pg.Pool({connectionString: databaseUrl});
};

const disconnectDatabase = (store) => {
    if (store.sockets.length > 0) return;
    store.pool.end();
    store.pool = undefined;
};

module.exports = {connectToDatabase, disconnectDatabase};