import { useState } from 'react'
import {Main,NavBar,Footer} from './components'

function App() {
  const [todos, setTodos] = useState([])
  return (
    <div >
      <NavBar/>
        <Main todos={todos} setTodos = {setTodos}/> 
      <Footer/>
    </div>
  )
}
export default App
