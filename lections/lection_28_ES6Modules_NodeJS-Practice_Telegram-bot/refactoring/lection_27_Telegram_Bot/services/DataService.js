const FileService = require('../utils/FileService');
const BotService = require('./BotService');

const deleteMsgCallback = (msg) => {
    const userID = msg.from.id;
    const msgId = msg.text.split(' ')[1];

    FileService.readFile(usersDataPath).then((parsedUsersData) => {
        let content = '';
        if (parsedUsersData[userID]) {
            const originalLength = parsedUsersData[userID].history.length;
            parsedUsersData[userID].history = parsedUsersData[userID].history.filter(msg => msg.message_id !== Number(msgId))

            if (parsedUsersData[userID].history.length === originalLength) {
                content = `No msgs for id: ${msgId}`
            } else {
                FileService.writeFile(usersDataPath, parsedUsersData);
    
                content = `Msg id: ${msgId} was deleted.`
            }
        } else {
            content = 'No msgs for user - ' + userID;
        }

        BotService.sendMessage(userID, content);
    })
}

module.exports = {
    deleteMsgCallback
};