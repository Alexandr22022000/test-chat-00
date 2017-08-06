const axios = require('axios'),
    changePage = require('../interface-scripts/changePage'),
    {SERVER_ERROR, WAITING, READY, INCORRECT_DATA, LOGIN_USED, CONNECT_ERROR} = require('../constants/statuses'),
    {PAGE_LOGIN} = require('../constants/pages'),
    getUrl = require('./getUrl');

module.exports = (login, password, userName, store) => {
    store.toolbar.setStatus(WAITING);

    axios.post(`${getUrl()}/registration`, {login, password, userName})
        .then((response) => {
            if (response.data.error) {
                switch (response.data.error) {
                    case INCORRECT_DATA:
                        store.toolbar.setStatus(INCORRECT_DATA);
                        return;

                    case LOGIN_USED:
                        store.toolbar.setStatus(LOGIN_USED);
                        return;

                    default:
                        console.log(response.data.error);
                        store.toolbar.setStatus(SERVER_ERROR);
                        return;
                }
            }

            store.toolbar.setStatus(READY);
            changePage(PAGE_LOGIN);
        })
        .catch((error) => {
            switch (error.statusCode) {
                case 500:
                    console.log(error);
                    store.toolbar.setStatus(SERVER_ERROR);
                    break;

                default:
                    console.log(error);
                    store.toolbar.setStatus(CONNECT_ERROR);
            }
        });
};

