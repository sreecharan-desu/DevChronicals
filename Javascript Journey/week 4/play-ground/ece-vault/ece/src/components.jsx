  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import React from "react"
  import {Records,Notes,edc,nt,ss,oops,lanms} from './data.jsx'


  export function NavBar(props){
    return(
      <>
        <nav className={"navbar bg-body-tertiary"}>
        <div className={"footer"}>
          <a className={"navbar-brand"} href={"#"} style={{fontSize:'22px'}}>
            <img src={viteLogo} alt={"Logo"} width={"30"} height={"24"} className={"d-inline-block align-text-top"}/>
              EceVault
          </a>
        </div>
      </nav>
      <marquee>
        Welcome to ECEVault
      </marquee>
      </>
    )
  }
  
  export function Dir(props){
    return(
      <div style={{margin:'10px'}}>
        <h3>
          {props.Directory.map((text)=>{
            return text
          })}
        </h3>
      </div>
    )
  }
  
  export function Footer(props){
    return(
    <nav className={"navbar fixed-bottom bg-body-tertiary"}>
      <div className={"container-fluid"}>
        <a className={"navbar-brand"} href={"#"} style={{fontSize : '14px' , textAlign : 'center'}}>
          ECEVault <sup>&copy;</sup> &middot; 2024
        </a>
        <small>
          Made with &hearts; by SreeCharan
        </small>
      </div>
    </nav>
    )
  }


 export function Main(props){
    return(
    <div className={"main"} style={{marginBottom : '50px'}}>
      <div className={"card m-4"}>
        <div className={"card-body"}>
          {props.Cards.map((card,index)=>{
              return <Card key = {index} name = {card.name} setCards = {props.setCards}  Directory = {props.Directory} setDirectory = {props.setDirectory} link = {card.link}/>
          })}
        </div>
    </div>
    </div>
    )
  }

  export function Card(props){
    function onclickHandler(arg){
      if(arg == "Records"){
        props.Directory.push("Records")
        props.setDirectory(props.Directory)
        props.setCards(Records);
      }
      else if(arg == "Notes"){
        props.Directory.push("Notes")
        props.setDirectory(props.Directory)
        props.setCards(Notes);
      }
      else if(arg == "Electronics devices and circuits"){
        props.Directory.push("/Electronics devices and circuits")
        props.setDirectory(props.Directory)
        props.setCards(edc);
      }
      else if(arg == "Network Theory"){
        props.Directory.push("/Network Theory")
        props.setDirectory(props.Directory)
        props.setCards(nt);
      }
      else if(arg == "Signals and Systems"){
        props.Directory.push("/Signals and Systems")
        props.setDirectory(props.Directory)
        props.setCards(ss);
      }
      else if(arg == "Object oriented programming (C++)"){
        props.Directory.push("/Object oriented programming (C++)")
        props.setDirectory(props.Directory)
        props.setCards(oops);
      }
      else if(arg == "Linear Algebra and Numerical methods"){
        props.Directory.push("/Linear Algebra and Numerical methods")
        props.setDirectory(props.Directory)
        props.setCards(lanms);
      }
    }
    if(props.link == null){
      return(
        <>
          <div className={"card"} style={{width:'18rem', margin:'14px'}} onClick = {()=>onclickHandler(props.name)}> 
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
              <path d="M13.172,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8.828c0-0.53-0.211-1.039-0.586-1.414l-4.828-4.828 C14.211,2.211,13.702,2,13.172,2z M15,18H9c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1v0 C16,17.552,15.552,18,15,18z M15,14H9c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1v0 C16,13.552,15.552,14,15,14z M13,9V3.5L18.5,9H13z"></path>
          </svg>          
              <div className={"card-body"}>
                <p className={"card-text"}>
                  {props.name}
                </p>
              </div>
            </div>
        </>
      )
    }
    else{
      return(
        <>
        <a href={props.link}>
          <div className={"card"} style={{width:'18rem', margin:'14px'}} onClick = {()=>onclickHandler(props.name)}> 
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
              <path d="M13.172,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8.828c0-0.53-0.211-1.039-0.586-1.414l-4.828-4.828 C14.211,2.211,13.702,2,13.172,2z M15,18H9c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1v0 C16,17.552,15.552,18,15,18z M15,14H9c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1v0 C16,13.552,15.552,14,15,14z M13,9V3.5L18.5,9H13z"></path>
          </svg>          
              <div className={"card-body"}>
                <p className={"card-text"}>
                  {props.name}
                </p>
              </div>
            </div>
        </a>
        </>
      )
    }
  }