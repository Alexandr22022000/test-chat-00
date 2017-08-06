const {PAGE_LOGIN, PAGE_REGISTRATION, PAGE_CHAT} = require('../constants/pages');

module.exports = (page) => {
    switch (page) {
        case PAGE_LOGIN:
            document.getElementById('login').style.display = 'block';
            document.getElementById('registration').style.display = 'none';
            document.getElementById('chat').style.display = 'none';
            break;

        case PAGE_REGISTRATION:
            document.getElementById('login').style.display = 'none';
            document.getElementById('registration').style.display = 'block';
            document.getElementById('chat').style.display = 'none';
            break;

        case PAGE_CHAT:
            document.getElementById('login').style.display = 'none';
            document.getElementById('registration').style.display = 'none';
            document.getElementById('chat').style.display = 'block';
            break;
    }
};