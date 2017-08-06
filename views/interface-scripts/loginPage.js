const changePage = require('./changePage'),
    login = require('../scripts/login'),
    createSocket = require('../scripts/createSocket'),
    {PAGE_REGISTRATION} = require('../constants/constants');

class LoginPage {
    constructor (store) {
        this.login = document.getElementById('login__login');
        this.password = document.getElementById('login__password');

        document.getElementById('login__go-to-registration').onclick = () => changePage(PAGE_REGISTRATION);
        document.getElementById('login__run').onclick = () => {
            createSocket(store);
            login(this.login.value, this.password.value, store);
        };
    }
}

module.exports = LoginPage;