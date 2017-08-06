const cheekRegistrationData = require('./cheekRegistrationData'),
    cheekUniquenessLogin = require('./cheekUniquenessLogin'),
    {connectToDatabase, disconnectDatabase} = require('./databaseConnectManager'),
    {INCORRECT_DATA, LOGIN_USED} = require('../app/constants/statuses');

module.exports = (req, res, store) => {
    const name = req.body.userName, password = req.body.password, login = req.body.login;

    if (!cheekRegistrationData(name, login, password)) {
        res.status(200).jsonp({error: INCORRECT_DATA});
        return;
    }

    connectToDatabase(store);
    cheekUniquenessLogin(login, store.pool, (error, isFree) => {
        if (error) {
            disconnectDatabase(store);
            res.status(200).jsonp({error});
            return;
        }

        if (!isFree) {
            disconnectDatabase(store);
            res.status(200).jsonp({error: LOGIN_USED});
            return;
        }

        store.pool.query('INSERT INTO users(name, login, password) VALUES($1, $2, $3)', [name, login, password], (error) => {
            disconnectDatabase(store);

            if (error) {
                res.status(200).jsonp({error});
            }
            else {
                res.status(200).jsonp({success: true});
            }
        });
    });
};