const jsonp = require('jsonp'),
    changePage = require('../interface-scripts/changePage'),
    {SERVER_ERROR, WAITING, READY, INCORRECT_DATA, LOGIN_USED, CONNECT_ERROR} = require('../constants/statuses'),
    {PAGE_LOGIN} = require('../constants/constants');

module.exports = (login, password, userName, store) => {
    store.toolbar.setStatus(WAITING);

    jsonp(`http://localhost:5000/registration?login=${login}&pass=${password}&name=${userName}`, (error, response) => {
        if (error) {
            console.log(error);
            store.toolbar.setStatus(CONNECT_ERROR);
            return;
        }

        if (response.error) {
            switch (response.error) {
                case INCORRECT_DATA:
                    store.toolbar.setStatus(INCORRECT_DATA);
                    return;

                case LOGIN_USED:
                    store.toolbar.setStatus(LOGIN_USED);
                    return;

                default:
                    store.toolbar.setStatus(SERVER_ERROR);
                    return;
            }
        }

        store.toolbar.setStatus(READY);
        changePage(PAGE_LOGIN);
    });

    /*$.ajax({
        url: `http://localhost:5000/registration?login=${login}&pass=${password}&name=${userName}`,
        type: "GET",
        contentType: "application/json",
        success: function (users) {
            console.log(users);
        }
    });*/
};

