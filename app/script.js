const ChatPage = require('./interface-scripts/chatPage'),
    LoginPage = require('./interface-scripts/loginPage'),
    RegistrationPage = require('./interface-scripts/registrationPage'),
    Toolbar = require('./interface-scripts/toolbar'),
    store = {};

document.addEventListener('DOMContentLoaded', function(){
    store.chatPage = new ChatPage(store);
    store.loginPage = new LoginPage(store);
    store.registrationPage = new RegistrationPage(store);
    store.toolbar = new Toolbar(store);
}, false);

/*
---Check devise---
 */
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    .test(navigator.userAgent);

if (isMobile) {
    document.write('<link type="text/css" href="stylesMobile.css" rel="stylesheet"/>');
}
else {
    document.write('<link type="text/css" href="styles.css" rel="stylesheet"/>')
}