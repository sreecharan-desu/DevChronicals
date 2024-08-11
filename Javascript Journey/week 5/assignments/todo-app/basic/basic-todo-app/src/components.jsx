import {AddTodo,TodosList} from './sub-components';

export function NavBar(){
    return(
      <>  
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Todo App</span>
        </div>
      </nav>
        <h1>
        </h1>
      </>
    )
}

export function Main(props){
  return(
    <>
      <AddTodo Todos={props.todos} setTodos = {props.setTodos}/>
      <TodosList Todos={props.todos} setTodos = {props.setTodos}/>
    </>
  )
}
export function Footer(){
  return(
    <>
      <div style={{display : 'flex' , flexDirection : 'row' , justifyContent : 'center',alignContent : 'center', marginTop : '100px' }}>
        <nav className="navbar fixed-bottom bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <small style={{fontSize : '16px',textAlign : 'center' , position : 'initial'}}>
                TodoApp &middot; 2024 &middot; All rights reserverd
              </small>          
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
