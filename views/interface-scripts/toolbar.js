const logout = require('../scripts/logout'),
    {NONE_USER, INCORRECT_DATA, LOGIN_USED, SERVER_ERROR, CONNECT_ERROR, WAITING, READY} = require('../constants/statuses');

class Toolbar {
    constructor (store) {
        this.statusIcon = document.getElementById('toolbar__status');
        this.userName = document.getElementById('toolbar__user-name');
        this.logoutButton = document.getElementById('toolbar__logout');
        this.logoutButton.onclick = () => logout(store);
    }

    setStatus (status) {
        switch (status) {
            case NONE_USER:
                this.statusIcon.textContent = 'Не верный логин или пароль';
                break;

            case INCORRECT_DATA:
                this.statusIcon.textContent = 'Не корректные данные для регистрации';
                break;

            case LOGIN_USED:
                this.statusIcon.textContent = 'Данный логин уже используется';
                break;

            case SERVER_ERROR:
                this.statusIcon.textContent = 'Ошибка на сервере';
                break;

            case CONNECT_ERROR:
                this.statusIcon.textContent = 'Ошибка при подключении';
                break;

            case WAITING:
                this.statusIcon.textContent = 'Ожидание...';
                break;

            case READY:
                this.statusIcon.textContent = 'Готов';
                break;

            default:
                this.statusIcon.textContent = 'Неизвестная ошибка';
        }
    }

    setUser (userName) {
        if (userName !== null) {
            this.userName.textContent = userName;
            this.logoutButton.style.display = 'inline-block';
        }
        else {
            this.userName.textContent = 'Войдите в аккаунт';
            this.logoutButton.style.display = 'none';
        }
    }
}

module.exports = Toolbar;