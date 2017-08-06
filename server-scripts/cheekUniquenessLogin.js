const deleteSpace = require('./deleteSpace');

module.exports = (login, pool, callback) => {
    pool.query('SELECT * FROM users', (error, data) => {
        if (error) return callback(error);

        let isFree = true;
        data.rows.forEach((user) => {
            isFree = (deleteSpace(user.login) === login) ? false : isFree;
        });

        callback(undefined, isFree);
    });
};