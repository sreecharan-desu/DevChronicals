import { useState } from 'react'
import './App.css'
import {Main} from './components'
// import express from 'express';

function App() {
  let btn = ['1','2','3','+','4','5','6','-','7','8','9','X','⌫','0','C','='];
  const [Buttons,setButtons] = useState(btn);
  const [display, setDisplay] = useState('');
  return (
    <div style={{display : 'flex',flexDirection : 'column',justifyContent : 'center',alignContent : 'center'}}>
      <Main Buttons = {Buttons} Display = {display} setDisplay = {setDisplay}/>
    </div>
  )
}

export default App
