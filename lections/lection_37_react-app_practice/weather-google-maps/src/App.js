import logo from './logo.svg';
import './App.css';
import GoogleMapRoot from './components/GoogleMapRoot';
import WeatherContainer from './components/WeatherContainer';
import WeatherTransportWrapper from './components/WeatherTransportWrapper';

function App() {
  return (
    <div className="App">
      <WeatherTransportWrapper />
    </div>
  );
}

export default App;
