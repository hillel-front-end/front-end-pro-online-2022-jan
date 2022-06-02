class Configurations {
    static webServer = 'http://localhost:6565';
}

class APILayer {
    static getUsers() {
        return fetch(Configurations.webServer + '/users').then(resp => resp.json())
    }

    static getCurrentWeather() {
        return fetch(Configurations.webServer + '/current-weather').then(resp => resp.json())
    }
}


console.log('Main code strted.')


APILayer.getUsers().then(users => {
    console.log('getUsers', users)
})




document.querySelector('#weather').addEventListener('click', () => {
    APILayer.getCurrentWeather().then(weather => {
        console.log('getCurrentWeather', weather)
    })
})