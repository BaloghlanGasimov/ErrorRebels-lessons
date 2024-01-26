import React, { useState } from 'react'
import Test from './Test';

const App = () => {


  const a = data.filter(p=>p.name==name);

  const [counter,setCounter]=useState(3);
  // var counter=3;

  // setCounter(3);

  // setCounter(counter+1)

  const artirFunc =()=>{
    // counter++ => counter=counter+1

    // counter++;
    // console.log(counter);
    setCounter(counter+1);
  }
  const azaltFunc=()=>{
    // counter--;
    setCounter(counter-1);

  }

  return (
    <div>
      
      <p>State imin deyeri: {counter}</p>

      <button onClick={artirFunc} >artir</button>
      <button onClick={azaltFunc}>azalt</button>

    <Test  ad="Baloghlan" />
    <Test  ad="Ramazan" />

    </div>
  )
}

export default App