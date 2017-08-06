const sendMessage = require('../scripts/sendMessage');

class ChatPage {
    constructor (store) {
        this.messages = document.getElementById('chat__messages');
        this.newMessage = document.getElementById('chat__text-new-message');

        document.getElementById('chat__send-new-message').onclick = () => {
            sendMessage(this.newMessage.value, store.socket);
        };
    }

    onSendMessage (text, sender) {
        this.messages.innerHTML = this.messages.innerHTML +
            `<div class="message"><p class="message__text">${text}</p><p class="message__sender">${sender}</p></div>`;

        this.messages.scrollTop = this.messages.scrollHeight;
    }

    setMessageHistory (messages) {
        this.messages.textContent = '';
        for (let key in messages) {
            this.onSendMessage(messages[key].text, messages[key].sender);
        }
    }
}

module.exports = ChatPage;