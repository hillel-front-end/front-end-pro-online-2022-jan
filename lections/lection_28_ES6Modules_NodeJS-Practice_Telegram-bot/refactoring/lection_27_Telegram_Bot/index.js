const FileService = require('./utils/FileService');
const BotService = require('./services/BotService');
const WeatherService = require('./services/WeatherService');
const DataService = require('./services/DataService');

const usersDataPath = 'lections/lection_27_Telegram_Bot/users.json';

BotService.bot.onText(/\/reportToAll/, (msg) => {
    const userID = msg.from.id;
    const isAdmin = [261745929].includes(userID)

    if (!isAdmin) return;


    FileService
        .readFile(usersDataPath)
        .then((data) => {
            for (let userID in data) {
                BotService.sendMessage(userID, JSON.stringify(data[userID].history))

                WeatherService.load()
                    .then(weather => {
                        BotService.sendMessage(userID, JSON.stringify(weather, null, '\t'));
                    })
            }
        });
});

BotService.bot.onText(/\/deleteMsg/, (msg) => {
    console.log(msg.from.id);

    DataService.deleteMsgCallback(msg);
    // DataService.deleteFromDB();
})

BotService.bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // DIRTY HACK
  if (
      msg.text.includes('/deleteMsg') || 
      msg.text.includes('/deleteInfo') ||
      msg.text.includes('/showMsgs') ||
      msg.text.includes('/reportToAll')
      ) {
      return;
  }

    FileService
        .readFile(usersDataPath)
        .then((usersData) => {
            // If file not exist or other error
            if (err) {
                usersData = {}
            }

            const newMsg = { message_id: msg.message_id, text: msg.text };
            if (usersData[msg.from.id]) {
                usersData[msg.from.id].history.push(newMsg);
            } else {
                usersData[msg.from.id] = {
                    history: [newMsg]   
                };
            }

            FileService.writeFile(usersDataPath, usersData);
        })

    BotService.sendMessage(chatId, 'Msg was saved.', {
        reply_markup: {
            'keyboard': [['/showMsgs', '/deleteInfo']],
        }
    });
});

/*
    // POST/GET params, body
    // post with form data, images, Blob
    // Postman
*/



fetch('https://balba.com/value', {
    method: 'POST',
    body: JSON.stringify({x: 10, y: 20})
});

// <input name="test" value="iop" />
// ?test=iop

// list = [1,2,3,4]

// GET params
// fetch('{prototol}://{domain}/{resource}?name=Boni&test=iops&list=1&is_flag=true&age=21&list=2&list=3&list=4', {
//     // method: 'POST'
// });