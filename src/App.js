import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [value1, setValue1] = useState(0);
  let [value2, setValue2] = useState(0);
  let [res, setRes]=useState(0);

  const addition = event => {
    let res1=parseInt(value1)+parseInt(value2);
    setRes(res1);
  };
  const subtraction = event => {
    let res1=parseInt(value1) - parseInt(value2);
    setRes(res1);
  };
  const multi = event => {
    let res1=parseInt(value1) * parseInt(value2);
    setRes(res1);
  };
  const divi = event => {
    let res1=parseInt(value1) / parseInt(value2);
    setRes(res1);
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
