import { useState } from 'react'

export function MarkAsDone(props){
    const MarkAsDone = (index)=>{
      const updated_Todos = props.Todos.map((todo,todoindex)=>{
        if(todoindex == index){
          todo.Completed = true;
        }
        return todo;
      })
      props.setTodos(updated_Todos);
    };
  
    return(
      <button className="btn btn-primary" type="button" value={'Mark as done'} onClick={()=>{MarkAsDone(props.Index)}}>Mark as Done</button>
    )
  }
  
  
export function EditingTodo(props){
    const removeTodo = (indexToBeRemoved) => {
      const newTodos = props.Todos.filter((_,index)=>index != indexToBeRemoved) //_ is used as a placeholder for the element since it is not needed in this context.
          // filter function 
              //array.filter( `callbackFN`(element,index)=>(condition))
      props.setTodos(newTodos);
    };
    const [editedTitleValue,setEditedTitle] = useState((props.TodoCopy.Completed == true) ? (props.TodoCopy.Title + " ✔") : (props.TodoCopy.Title))
    const [editedDescValue,setEditedDesc] = useState((props.TodoCopy.Description));
    const editTitleHandler = (event)=>{
      setEditedTitle(event.target.value)
    };
    const editDescHandler = (event)=>{
      setEditedDesc(event.target.value)
    };
  
    const EditTodo = (indexofTodo)=>{
      const updated_todos = props.Todos.map((todo,index)=>{
        if(index == indexofTodo){
          todo.Title = editedTitleValue
          todo.Description = editedDescValue
          todo.Editing = false
        }
        return todo;
      });
      props.setTodos(updated_todos);
    };
    return(
      <>
          <div className="card" style={{width: '95%',margin : '20px',padding : '10px'}}>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={editedTitleValue} onChange={editTitleHandler}/>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={editedDescValue} onChange={editDescHandler}/>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-primary" type="button" value={'Add Todo'} onClick={()=>EditTodo(props.TodoCopy.Index)}>Edit Todo</button>
            </div>
          </div>
      </>
    )
  }
  
export function NormalTodo(props){
    const removeTodo = (indexToBeRemoved) => {
    const newTodos = props.Todos.filter((_,index)=>index != indexToBeRemoved) //_ is used as a placeholder for the element since it is not needed in this context.
          // filter function 
              //array.filter( `callbackFN`(element,index)=>(condition))
      props.setTodos(newTodos);
    };
    return(
      <>
        <div className="card-body">
          <h5 className="card-title">
            { 
            (props.TodoCopy.Completed == true) ? (props.TodoCopy.Title + " ✔") : (props.TodoCopy.Title)
            }
          </h5>
          <p className="card-text">
            {props.TodoCopy.Description}
          </p>
          <button className="btn btn-primary" type="button" onClick={()=>{removeTodo(props.TodoCopy.Index)}}>Remove</button>
          { 
            (props.TodoCopy.Completed == true) ? '' : (<> <MarkAsDone Todos={props.Todos} setTodos = {props.setTodos} Index = {props.TodoCopy.Index}/><EditTodo TodoCopy = {props.TodoCopy} Todos = {props.Todos} setTodos = {props.setTodos}/> </>)
          }
        </div> 
      </>
    )
  }
  
export function EditTodo(props){
    const editTodo = (indexOfTodo)=>{
      const updated_Todos = props.Todos.map((todo,index)=>{
        if(index == indexOfTodo){
          todo.Editing = true;
        }
        return todo;
      })
      props.setTodos(updated_Todos);
    }
    return(
      <button className="btn btn-primary m-1" type="button" onClick={()=>editTodo(props.TodoCopy.Index)}>Edit</button>
    )
}
  

export function AddTodo(props){

  const [TitleValue,setTitle] = useState('');
  const [DescValue,setDesc] = useState('');

  const TitleHandler = (event)=>{
    setTitle(event.target.value);
  }
  const DescHandler = (event)=>{
    setDesc(event.target.value);
  }

  const onclickHandler = ()=>{
    if(TitleValue == '' || DescValue == ''){
      alert("A todo must have Title & Description")
    }
    else{
      let Todo = {
        Title : TitleValue,
        Description : DescValue,
        Completed : false,
        Editing : false
      }
      props.setTodos([...props.Todos,Todo])
      setTitle('');setDesc('')
    }
  }
  return(
    <>
    <div className="card" style={{ display : 'flex' , flexDirection : 'row' , justifyContent : 'space-around',alignContent : 'center',margin : '20px'}}>
      <div className="card" style={{width: '32rem',margin : '20px'}}>
        <div className="card-body">
          <div style={{textAlign : 'center',padding : '10px'}}>
            <h5 className="card-title">Add Todo</h5>
            <div className="input-group m-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={TitleValue} onChange={TitleHandler}/>
            </div>
            <div className="input-group m-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={DescValue} onChange={DescHandler}/>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-primary" type="button" value={'Add Todo'} onClick={onclickHandler}>Add Todo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export function TodosList(props){

  return(
    (props.Todos).map((todo,index)=>{
      const TodoCopy = {
        Title : todo.Title,
        Description : todo.Description,
        Completed : todo.Completed,
        Editing : todo.Editing,
        Index : index
      }
      return(
        <div key={index} style={{ display : 'flex' , flexDirection : 'row' , justifyContent : 'space-around',alignContent : 'center',margin : '20px'}}>
          <div className="card w-75 m-3">
            <div style={{display : 'flex' , flexDirection : 'column' , justifyContent : 'center',alignContent : 'center'}}>
            {
              (todo.Editing == true) ? <EditingTodo TodoCopy = {TodoCopy} Todos = {props.Todos} setTodos = {props.setTodos}/> : <NormalTodo  TodoCopy = {TodoCopy} Todos = {props.Todos} setTodos = {props.setTodos}/>
            }
          </div>
          </div>
        </div>
      )
    }) 
  )
} 