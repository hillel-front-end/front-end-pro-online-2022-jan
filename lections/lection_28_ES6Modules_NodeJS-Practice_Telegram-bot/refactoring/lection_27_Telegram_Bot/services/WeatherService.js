const fetch = require('node-fetch');

const configs = {
    API_KEY: '{insert weather key}'
};

class WeatherService {
    configs = configs
    load(coords) {

        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=30.472484&appid=${this.configs.API_KEY}`)
            .then(resp => resp.json());
    }


    example(data) {

        const getParams = new URLSearchParams(data);

        getParams.append('test', 'vasya')
        getParams.delete('appid')

        const URL = `https://api.openweathermap.org/data/2.5?${getParams.toString()}`;
    }
}

module.exports = new WeatherService();