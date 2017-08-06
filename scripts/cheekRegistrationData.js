module.exports = (name, login, password) => {
    return (name.length < 1000) && (login.length < 255) && (password.length < 255);
};