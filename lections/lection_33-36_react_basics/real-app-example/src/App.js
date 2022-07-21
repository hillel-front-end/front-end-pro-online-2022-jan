import { useCallback, useEffect, useState } from 'react'
import './App.css';
import WeatherCurrent from './components/Weather/WeatherCurrent';
import WeatherForecast from './components/Weather/WeatherForecast';
import Button  from './components/Button';
import Chip  from './components/Chip';

function App() {
  const [forecastTemp, setForecastTemp] = useState(0);
  const [currentTemp, setCurrentTemp] = useState(0);

  const onTempUpdate = useCallback((temp) => {
    setForecastTemp(temp);
  }, [])

  let onCurrentTempUpdate = useCallback((temp) => {
    setCurrentTemp(temp);
  }, [])

  return (
    <div className="App"> 
      <WeatherForecast handler={onTempUpdate} log_group="weather_forecast" />
      <hr />
      {/* <WeatherCurrent ActionComponent={Button} handler={onCurrentTempUpdate} /> */}
      {/* <WeatherCurrent ActionComponent={Chip} handler={onCurrentTempUpdate} /> */}
      <hr />
      <Button title="Click me">
        Hello world! <ul><li>1</li><li>2</li></ul> <Chip title={currentTemp} />
      </Button>
      Forecast Temp: {forecastTemp}
      {' '}
      Current Temp: {currentTemp}
    </div>
  );
}

export default App;
