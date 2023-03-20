import { useState } from 'react';
import './App.css';

function Count(){
    let [count, setCount] = useState(10);

    const handleSelect = (e)=>{
        count--;
        setCount(count);
    }
    return (
        <div className="App">
            <h1>Count : {count}</h1>
            <hr/>
            <button onClick={handleSelect}>Click me</button>
        </div>
    )
}
export default Count;