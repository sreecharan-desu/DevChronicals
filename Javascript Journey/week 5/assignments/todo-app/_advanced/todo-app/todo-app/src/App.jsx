import { useState } from 'react'
import { NavBar, Wish , AddTodo,Todos,Footer } from './Components'
import './App.css'

function App() {
  //getting user details
  
  // fetch('http://localhost:5000/userstate').then(
  //   async(response)=>{
  //     const User = await response.json();
  //     const Response = User.User
  //     console.log(Response)
  //   }
  // )


  //Dummy Data

  let Response = [
    {
      Username : "username" ,//response from backend after user signs in,
      Password : "jkhjk",
      Todos : [
        {
          Title : 'Todo Title 1',
          Description : "Todo Descripttion 1"
        },
        {
          Title : 'Todo Title 2',
          Description : "Todo Descripttion 2"
        },
        {
          Title : 'Todo Title 3',
          Description : "Todo Descripttion 3"
        }//response from backend
      ]
    }
  ]

  const [User,setUser] = useState(Response)

  return (
    <>
      <NavBar/>
        <Main User = {User} setUser = {setUser}/>
      <Footer/>
    </>
  )
}

function Main(props){
  return(
    <div >
        <Wish Name = {props.User[0].Username}/>
        <AddTodo User = {props.User} setUser = {props.setUser}/>
        <Todos Todos = {props.User[0].Todos}/>
    </div>
  )
}

export default App
