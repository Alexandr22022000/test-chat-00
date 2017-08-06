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