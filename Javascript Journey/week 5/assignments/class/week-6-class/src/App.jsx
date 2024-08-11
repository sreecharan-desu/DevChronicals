import React, { useState } from 'react'
import './App.css'


// Minimizing the Number of Re-renders 
  // 1-> Push The State Down 
  //  -> If the parent re-renders then automatically the child re-renders
  //  -> Define the state in the lowest common ancestors of components




// function App() {
//   return (
//     <>
//       <HeaderWithButton/>
//       <Header Title = {"Second Component"}/>
//       <Header Title = {"Third Component"}/>
//       <Header Title = {"Fourth Component"}/>
//       <Header Title = {"Five Component"}/>
//       <Header Title = {"Six Component"}/>

//     </>
//   )
// }

// function HeaderWithButton(){ 
//   const [Title,setTitle] = useState("First Component");
//   const onclickHandler = ()=>{
//     setTitle(Math.random());
//   }
//   return(
//     <>
//       <button onClick={onclickHandler}>
//           Click me to change Header
//       </button>      
//       <h1>
//       My name is {Title}
//       </h1>
//     </>
//   )
// }

// function Header({Title}){
//   return(
//     <>   
//       <h1>
//         My name is {Title}
//       </h1>
//     </>
//   )
// }


  // 2-> Using React.Memo()



// function App(){
//   const [title,setTitle] = useState("Header");
//   function onclickHandler(){
//     setTitle(Math.random());
//   }

//   return(
//     <>
//       <button onClick={onclickHandler}>
//         Click me and i wil change the text in the headers
//       </button>

//       <Header title = {title}/>
//       <Header title = "Charan"/>
//       <Header title = "Charan"/>
//       <Header title = "Charan"/>
//       <Header title = "Charan"/>
//       <Header title = "Charan"/>
//     </>
//   )
// }


// const Header = React.memo(
//   function Header({title}){
//     return(
//     <h1>
//       {title}
//     </h1>
//     )
//   } 
// )







export default App
