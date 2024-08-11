import addTodo from './assets/add.svg'
import deleteTodo from './assets/delete.svg'
import editTodo from './assets/edit.svg'
import Logo from './assets/logo.svg'
import { useState } from 'react'

export function NavBar(){
    return(
      <>
        <nav className="navbar fixed-top bg-danger">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{fontStyle : 'oblique', fontWeight : '1700'}}>
              <img src={Logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" style={{borderRadius : '100px'}} /> &nbsp;
              Todo App
            </a>
          </div>
        </nav>
      </>
    )
  }
  
export function Wish(props){
    return(
      <div style={{ width: "auto" , margin : '10px' , border : 'none',marginTop : '80px'}} className= "card">
        <h1>
          Welcome back! <br /> {props.Name}
        </h1>
      </div>
    )
  }
  
  
  
export function AddTodo(props){
    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const handleTitleChange = (event) => {
        setTitleValue(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescriptionValue(event.target.value);
    };

    async function onclickHandler(){
        if(titleValue == ''){
            alert('A Todo Must Contain a Title')
        }else{

        const resposne = await fetch('http://localhost:5000/addtodo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                username : (props.User[0].Username),
                password : (props.User[0].Password),
                title : titleValue,
                description : descriptionValue
            }), // Assuming you want to send the input value
          })
          const result = await resposne.json();
          if(result){
            alert("Todo Added Succesfully");
            console.log(result)
          }
        }
    }

    return(
      <div >
        <div style={{ width: "auto" , margin : '10px' , display : 'flex' , flexDirection : 'row' ,justifyContent : 'center', alignItems : 'center'}} className= "card">
          <div style={{ width: "30rem", margin : '10px',display : 'flex' , flexDirection : 'column' ,justifyContent : 'center', alignItems : 'center'}} className= "card d-flex justify-content-center">
            <div  style={{ width: "20rem", margin : '10px'}} className="input-group input-group-lg">
              <span className="input-group-text" id="inputGroup-sizing-lg">
                Title
              </span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={handleTitleChange} value={titleValue}/>
            </div>
            <div style={{ width: "20rem", margin : '10px'}} className="input-group">
              <span className="input-group-text">
                Description
              </span>
              <textarea className="form-control" aria-label="With textarea" onChange={handleDescriptionChange} value={descriptionValue}></textarea>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto mb-2">
              <button className="btn btn-danger" type="button" onClick={onclickHandler}>
                Add Todo
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
export function Todos(props){

    





    return(
      <>
        <div style={{ width: "auto" , margin : '10px' , border : 'none'}} className= "card">
            <h1>
              List of Todos : 
            </h1>
      </div>
          {
          (props.Todos.length > 0) ? (
            (
              <div style={{ width: "auto" , display : 'flex' , flexDirection : 'column' ,justifyContent : 'space-evenly', alignItems : 'center', marginBottom : '100px',paddingTop : '10px'}} className= "card">
              {
                (props.Todos).map((todo,index)=>{
                return(
                  <div className="card w-75 mb-3" key={index}>
                    <div className="card-body">
                    <div className="input-group input-group-sm mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-sm">
                        Title 
                      </span>
                      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={todo.Title} disabled />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-sm">
                        Description
                      </span>
                      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={todo.Description} disabled />
                    </div>
                    <button type="button" className="btn m-2 btn-danger" style={{ '--bs-btn-padding-y': '.25rem', '--bs-btn-padding-x': '.75rem', '--bs-btn-font-size': '1rem'}} >
                      Mark as done
                    </button>
                    <button type="button" className="btn m-2 btn-danger" style={{ '--bs-btn-padding-y': '.25rem', '--bs-btn-padding-x': '.75rem', '--bs-btn-font-size': '1rem'}} >
                      Edit Todo
                    </button>
                    <button type="button" className="btn m-2 btn-danger" style={{ '--bs-btn-padding-y': '.25rem', '--bs-btn-padding-x': '.75rem', '--bs-btn-font-size': '1rem'}} >
                      Delete Todo
                    </button>
                  </div>
                  </div>
                  )
                })
              }
            </div>
            )):
            (
            <div style={{ width: "auto" , display : 'flex' , flexDirection : 'column' ,justifyContent : 'space-evenly', alignItems : 'center', marginBottom : '100px',paddingTop : '10px'}} className= "card">
              <h3>
                Add Some Todos & Stay Consistent!
              </h3>
            </div>
            )
          }
      </>
    )
  }
  
export function Footer(){
    return(
      <>
        <nav className="navbar fixed-bottom bg-danger" style={{position : 'initial'}}>
          <div className="container-fluid d-flex justify-content-center">
            <a className="navbar-brand text-center" href="#">
              <small style={{fontSize : '14px'}} >
                TodoApp &middot; 2024  &middot; All rights reserved
              </small>
            </a>  
          </div>
        </nav>
      </>
    )
  }