import { useState } from 'react'
import './App.css'

function App() {
  const [cards, setCards] = useState([])
  return (
    <>
      <NavBar/>
        <Main Cards = {cards} setCards = {setCards}/>
      <Footer/>
    </>
  )
}



function NavBar(){
  return(
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Rusable-card          
          </span>
        </div>
      </nav>

    </>
  )
}


function Main(props){

  return(
    <div>
      <AddCard Cards = {props.Cards}  setCards = {props.setCards}/>
      <CardsList Cards = {props.Cards}  setCards = {props.setCards}/>
    </div>
  )

}

function AddCard(props){

      const [NameValue,setName]  = useState('');
      const [DescValue,setDesc]  = useState('');
      const [LinkedinValue,setLinkedin]  = useState('');
      const [TwitterValue,setTwitter]  = useState('');
      // const [Intrests,setIntrests]  = useState([]);

      const NameHandler = (event)=>{
        setName(event.target.value)
      }
      const DescHandler = (event)=>{
        setDesc(event.target.value)
      }
      const LinkedinHandler = (event)=>{
        setLinkedin(event.target.value)
      }
      const TwitterHandler = (event)=>{
        setTwitter(event.target.value)
      }


      function onclickhandler(){
        if(NameValue == '' || DescValue == ''){
          alert("All the details must be filled to generate the card")
        }
        else{
          let new_card = {
            Name : NameValue,
            Description : DescValue,
            Linkedin : LinkedinValue,
            Twitter : TwitterValue
          }
          props.setCards([...props.Cards,new_card])
        }
      }

      return(
<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center' }}>
  <div className="card" style={{ width: '52rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignContent: 'center' }}>
    <div style={{ margin: '20px', padding: '10px' }}>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
        <input type='text' value={NameValue} onChange={NameHandler} className="form-control" style={{ margin: '5px' }} required/>
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">Description</span>
        <input type='text' value={DescValue} onChange={DescHandler} className="form-control" style={{ margin: '5px' }} required/>
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">LinkedIn</span>
        <input type='text' value={LinkedinValue} onChange={LinkedinHandler} className="form-control" style={{ margin: '5px' }} />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">Twitter</span>
        <input type='text' value={TwitterValue} onChange={TwitterHandler} className="form-control" style={{ margin: '5px' }} />
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button type='button' value={'Add Card'} onClick={onclickhandler} className="btn btn-primary">
          Create My Card
        </button>
      </div>
    </div>
  </div>
</div>
)
}

function CardsList(props){
  return(
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center',marginTop : '50px'}}>
      <div className="card" style={{ width: '52rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
        <div>
            {
              (props.Cards).map((card,index)=>{
                return(
                <div className="card" style={{ width: '20rem' , margin : '10px'}} key = {index}>
                  <div className="card-body">
                    <h5 className="card-title">
                      {card.Name}
                    </h5>
                    <p className="card-text">
                      {card.Description}
                    </p>
                    <a href={card.Linkedin} target='_blank' className="btn btn-primary m-2">
                      Linkedin
                    </a>
                    <a href={card.Twitter} target='_blank' className="btn btn-primary m-2">
                      Twitter
                    </a>
                  </div>
                </div>
                )
              })
            }
          </div>
      </div>
    </div>
  )
}

function Footer(){
  return(
    <>
    <nav className="navbar fixed-bottom bg-body-tertiary" style={{position : 'initial'}}>
      <div className="container-fluid" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignContent: 'center' }}>
        <a className="navbar-brand" href="#" style={{fontSize : '16px'}}>
        2024 &middot; Reusable-card &middot; All rights reserved
        </a>
      </div>
    </nav>

    </>
  )
}

export default App
