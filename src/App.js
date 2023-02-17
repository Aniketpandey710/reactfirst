import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  var [value1, setValue1] = useState(0);
  var [value2, setValue2] = useState(0);
  var [res, setRes]=useState(0);

  const addition = event => {
    console.log(value1);
    console.log(value2);
    var res1=parseInt(value1)+parseInt(value2);
    setRes(res1);
    console.log(res1);
  };
  const subtraction = event => {
    console.log(value1);
    console.log(value2);
    var res1=parseInt(value1) - parseInt(value2);
    setRes(res1);
    console.log(res1);
  };
  const multi = event => {
    console.log(value1);
    console.log(value2);
    var res1=parseInt(value1) * parseInt(value2);
    setRes(res1);
    console.log(res1);
  };
  const divi = event => {
    console.log(value1);
    console.log(value2);
    var res1=parseInt(value1) / parseInt(value2);
    setRes(res1);
    console.log(res1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <h1>First React App </h1>
        <h2>Calculator</h2>
        <p>Enter first Value</p>
        <input 
          id='val1' 
          type="number"
          value={value1}
          onChange={event => setValue1(event.target.value)}
        ></input>
        <p>Enter Second Value</p>
        <input
          type="number"
          id='val2'
          value={value2}
          onChange={event => setValue2(event.target.value)}
        ></input>
        <br></br>
        <button onClick={addition}>+</button>
        <button onClick={subtraction}>-</button>
        <button onClick={multi}>*</button>
        <button onClick={divi}>/</button>
        <h3>Result</h3>
        <p id='res'>Result is : {res} </p>
        </div>
      </header>
    </div>
    
  );
}



export default App;
