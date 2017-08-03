const registration = require('./scripts/registration'),
    changePage = require('./scripts/changePage'),
    {PAGE_LOGIN, PAGE_REGISTRATION, PAGE_CHAT} = require('./constants/constants');

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('login__go-to-registration').onclick = () => {
        changePage(PAGE_REGISTRATION);
    };

    document.getElementById('registration__go-to-login').onclick = () => {
        changePage(PAGE_LOGIN);
    };

    document.getElementById('registration__run').onclick = () => {
        registration(document.getElementById('registration__login').value, document.getElementById('registration__password').value, document.getElementById('registration__name').value);
    };
}, false);