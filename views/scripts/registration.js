const jsonp = require('jsonp'),
    changePage = require('./changePage'),
    {PAGE_CHAT} = require('../constants/constants');

module.exports = (login, password, userName) => {
    jsonp(`http://localhost:5000/registration?login=${login}&pass=${password}&name=${userName}`, (error, response) => {
        if (response.success) changePage(PAGE_CHAT);
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

