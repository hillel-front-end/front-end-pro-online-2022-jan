const TelegramBot = require('node-telegram-bot-api');

const token = '{insert Telegram API token}';

class BotService {
    bot = new TelegramBot(token, {polling: true});
    // constructor(bot) {
    //     this.bot = bot;
    // }

    sendMessage(userID, data, sendMessageOptions = {}) {
        this.bot.sendMessage(userID, data, sendMessageOptions);
    }
}


module.exports = new BotService();