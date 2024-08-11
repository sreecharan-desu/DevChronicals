import { Children, Fragment, useState } from 'react'
import './App.css'


//-> Original syntax

// function App() {
//   return (
//     <>
//       <CardWrapper CardData = {Data}/>
//       <br />
//       <CardWrapper CardData = {Data2}/>
//     </>
//   )
// }

// function Data({data}){
//   return(
//     <>
//       <p>
//         Hi there i am the data of the wrapper react component
//       </p>
//     </>
//   )
// }

// function Data2({data}){
//   return(
//     <>
//       <p>
//         Hi there i am the second data of the wrapper react component
//       </p>
//     </>
//   )
// }

// function CardWrapper({CardData}){
//   return(
//     <>
//       <div style={{border : "2px solid red" , textAlign : 'center'}}>
//         <CardData/>
//       </div>
//     </>
//   )
// }


//-> using the `children` variable that we can have acces to all the things written inside a component

function App(){

  return(
    <Fragment>
      <WrapperComponent>
        Hi there
      </WrapperComponent>
      <br />
      <WrapperComponent>
        Hello world
      </WrapperComponent>
    </Fragment>
  )
}


function WrapperComponent({children}){
  return(
  <>
    <div style={{border : "2px solid red" , textAlign : 'center',padding : "20px"}}>
      {children}
    </div>
  </>
)}

export default App
