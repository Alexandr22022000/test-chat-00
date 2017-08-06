const changePage = require('./changePage'),
    registration = require('../scripts/registration'),
    {PAGE_LOGIN} = require('../constants/pages');

class RegistrationPage {
    constructor (store) {
        this.userName = document.getElementById('registration__name');
        this.login = document.getElementById('registration__login');
        this.password = document.getElementById('registration__password');

        document.getElementById('registration__go-to-login').onclick = () => changePage(PAGE_LOGIN);

        document.getElementById('registration__run').onclick = () => {
            registration(this.login.value, this.password.value, this.userName.value, store);
        };
    }
}

module.exports = RegistrationPage;