import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { decrementAction, incrementAction } from './store/actions/counterActions';
import { addGuestAction } from './store/actions/guestsActions';
import { useEffect, useState } from 'react';
import { weatherUpdateAction } from './store/actions/weatherActions';

function App(props) {
  const [newId, setNewId] = useState('');


  useEffect(() => {
    // fetch()
    //   .then(resp => resp.json)
    //   .then(weather => props.updateWeather(weather))
    // setTimeout(() => {
    //   props.updateWeather({
    //     temp: 28,
    //     time: Date.now()
    //   })
    // }, 3000)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* { hey redux store, give me some value! } */}
        {String(props.counter)}
        <button onClick={() => props.incrementValue()}>Increment</button>
        <button onClick={() => props.decrementValue()}>Decrement</button>

        <div></div>
        <ul>
          {props.guests.list.map((g, index) => <li key={`${g.id}-${index}`}>{g.id}</li>)}
        </ul>
        <input type="text" onChange={(event) => setNewId(event.target.value)} value={newId} /> 
        <button onClick={() => props.addGuest({ id: newId })}>Add guest</button>
        <hr />
        {String(JSON.stringify(props.weather.current))}
      </header>
    </div>
  );
}

// Values from Store will be added to props.

const mapStateToProps = state => ({
  ...state
});


const mapDispatchToProps = dispatch => ({
  incrementValue: () => dispatch(incrementAction),
  decrementValue: () => dispatch(decrementAction),
  addGuest: (payload) => dispatch(addGuestAction(payload)),
  updateWeather: (payload) => dispatch(weatherUpdateAction(payload))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
