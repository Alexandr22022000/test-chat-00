const pg = require('pg'),
    deleteSpace = require('./deleteSpace'),
    {NONE_USER} = require('../views/constants/statuses');

module.exports = (loginData, pool, callback) => {
    pool.query('SELECT * FROM users', (error, data) => {
        if (error) return callback({error});

        const users = data.rows;
        let success = false, user = null;
        for (let key in users) {
            let login = deleteSpace(users[key].login), password = deleteSpace(users[key].password);

            if ((login === loginData.login) && (password === loginData.password)) {
                success = true;
                user = {
                    name: deleteSpace(users[key].name),
                    login: loginData.login,
                    password: loginData.password
                };
            }
        }

        if (user === null) {
            callback({error: NONE_USER});
        }
        else {
            callback({user});
        }
    });
};