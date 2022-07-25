class WeatherService {
    apiHost = 'https://api.openweathermap.org/data/2.5/forecast'
    apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

    get endpoint() {
        return this.apiHost;
    }

    get apiParamObj() {
        return {
            appid: this.apiKey
        }
    }

    _getUrl(params) {
        let searchQuery = new URLSearchParams({ ...params, ...this.apiParamObj });
        return `${this.endpoint}?${searchQuery}`;
    }

    async loadForecast(params) {
        const rawData = await fetch(this._getUrl(params));
        const data = await rawData.json();

        return data;
    }
}


export default new WeatherService();