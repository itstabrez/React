import {useState} from "react";
import './App.css';

function App() {
  let [counter, setCounter] = useState(10)
  // let counter = 10;
  const addValue = () => {
    if (counter < 20) {
    setCounter(counter+=1)  ;
      console.log(counter);
    }
  }
  const removeValue = () => {
    console.log("value removed"); 
    if (counter > 0) {
      setCounter(counter-=1)  ;
    }
  }
  return (
    <>
    <h1>Counter App</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Increase Value</button>
    -
    <button  onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;
