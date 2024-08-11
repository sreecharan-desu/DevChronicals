import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//count -- state variable
//setCount -- a function to update state 

function App() {

  const [count,setCount] = useState(0);

  return (
    <div>
      <CounterButton count = {count} setCount={setCount}></CounterButton>
    </div>
  )
}



function CounterButton(props){

  function onclickhandler(){
    props.setCount(props.count + 1);
  }
  
  return(
    <div>
      <button onClick={onclickhandler}> Count {props.count}</button>
    </div>
  )
}

export default App
