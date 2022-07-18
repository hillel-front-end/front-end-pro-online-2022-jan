import React from 'react'
import './App.css'
import Button from './components/Button';
import Label from './components/Label';
import { superLongFunc } from './AppHelper.js'


// // Functional component - no state
// function App(props) {
//   const x = 10;

//   return (
//     <div>
//       Some text {x + 20}
//       <div>
//         Hello world! {props.text}
//         <br />
//         {props['specific-value']}
//       </div>
//     </div>
//   );
// }

// // Class Component - with state
// class App2 extends React.Component {
//   state = {
//     x: 10,
//     y: 20,
//     testValue: 78,
//     rand: this.getRand()
//   }

//   constructor(props) {
//     super(props)

//     setInterval(() => {
//       this.setState({
//         testValue: this.state.testValue + 1
//       })
//     }, 1000)
//   }

//   getRand() {
//     return Math.random();
//   }

//   render() {
//     return (
//       <div>
//         App 2
//         Some text {this.state.rand}
//         <div className="block">
//           Hello world! {this.props.text}
//           <br />
//           {this.props['specific-value']}
//         </div>
//         <hr />
//         <div>
//           {this.state.testValue}
//         </div>
//       </div>
//     );
//   }
// }

const example = 'Error: API';

const App = () => {
  return (
    <div>
        <h1>Main App</h1>
        <Label type="red" content={example} />
        <Label type="green" content="Success!" />
        <Label type="yellow" content="Warning info" />
        <hr />  
        <Button 
          className="Submit"
          title="Send request"
          handler={superLongFunc}
         />
        <Button 
          className="Cancel"
          type="cancel"
          handler={() => { console.log('Cancel') }}
         />
    </div>
  );
};

export default App;
