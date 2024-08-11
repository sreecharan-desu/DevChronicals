          import { useState } from 'react'
          import viteLogo from '/vite.svg'
          import './App.css'
          import React from 'react'
          import {NavBar , Footer , Dir , Main , Card} from './components'

          function App() {
            const [Cards, setCards] = useState([{name : 'Records',link : null},{name : 'Notes',link : null}]);
            const [Directory,setDirectory] = useState([''])
            return (
              <>
                <NavBar/>
                <Dir Directory = {Directory} />
                <Main Cards = {Cards} setCards = {setCards} setDirectory = {setDirectory}  Directory = {Directory}/>
                <Footer/>
              </>
            )
          }
export default App