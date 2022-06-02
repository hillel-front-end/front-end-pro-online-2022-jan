var http = require('http');
const fs = require('fs');
const fetch = require('node-fetch');
var static = require('node-static');
var file = new static.Server('.');
let port = 6565;

console.log('Hello webServer.');

// constants
const ALL_USERS_PATH = './data/usersData/allUsers.json';
const WEATHERS_DATA_PATH = './data/weathersData/';

class UsersService {
    loadAllUsers() {
        return new Promise((resolve, reject) => {
            fs.readFile(ALL_USERS_PATH, 'utf8', (err, usersData) => {
                if (err) {
                  console.error(err);
                  reject(err);
                  return;
                }
    
                console.log('usersData', usersData);
                resolve(usersData)
              });
        });
    }
}

const usersService = new UsersService();

class Configurations {
    static openWeaterAPI = 'https://api.openweathermap.org/data/2.5';
    static openWeatherKEY = 'fe147517cb42a8032190ecae01b8741c' // insert your's API Key - https://home.openweathermap.org/api_keys
}

class APILayer {
    loadCurrentWeather() {
        return fetch(Configurations.openWeaterAPI + `/weather?lat=50.451400&lon=30.472484&appid=${Configurations.openWeatherKEY}`)
            .then(resp => resp.json());
    }
}


const apiLayer = new APILayer();


http.createServer(function(req, res) {
    // cors
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Load all users
    if (req.url === '/users') {
        onUsersRequest(req, res)
            .then(usersList => {
                res.write(usersList);
                res.end();
            })
            .catch(err => {
                res.statusCode = 400
                res.write(JSON.stringify(err));
                res.end();
            });

        return;
    }

    // Load current weather
    if (req.url === '/current-weather') {

        onCurrentWeatherRequests()
            .then(weather => {
                res.write(JSON.stringify(weather));
                res.end();
            })
        return;
    }

    res.write('WebServer is working.')
    res.end();
}).listen(port);

console.log(`WebServer running on port ${port}`);


function onUsersRequest(req, res) {
    // Set cookies
    // Set Header
    res.setHeader('Super-Front-End-Pro-2022', 'All');
    // Log smth
    // Calculate
    // Call other requests
    return usersService.loadAllUsers();
}



function onCurrentWeatherRequests() {
    const weatherAsync = apiLayer.loadCurrentWeather();

    weatherAsync.then((currentWeather) => {
        // write to file
        // name? - "Current-weather-{Date.now()}".json

        fs.writeFile(`${WEATHERS_DATA_PATH}/current-weather-${Date.now()}.json`, JSON.stringify(currentWeather, null, '\t'), err => {
            if (err) {
              console.error(err);
            }
          });
    });

    return weatherAsync;
}
