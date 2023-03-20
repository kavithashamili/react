import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import Count from './count';
import Text from './Text';
import Component from './Component';

function App() {
  let array = ["apple","orange","mango","banana"]

  useEffect(()=>{
    console.log("Second");
  },[]);


  return (
    <div className="App">
      <h1>Daniel</h1>
      <hr/>
      {console.log("FIRST")};
      <Count/>
      {array.map((x)=><Text fruits = {x}/>)}
      <Component/>
    </div>
  );
}

export default App;
