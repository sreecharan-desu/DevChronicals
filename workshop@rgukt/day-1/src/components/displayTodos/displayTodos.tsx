import { useRecoilState } from "recoil";
import { Todos } from "../../store";
import { useTodos } from "../../customhooks/useTodos";
import { Button } from "../utils/button";

export function TodosList(){
    useTodos();
    interface Todo {
      id : string;
      title: string;
      description: string;
      created_at: string;
      completed : boolean;
    }
    const [todos, setTodos] = useRecoilState<Todo[]>(Todos);
    const markAsDone = (id:string)=>{
        const updated_todos = todos.map((todo)=>{if(todo.id === id){ return {id : todo.id, title : todo.title, description : todo.description,created_at : todo.created_at,completed : true}}else {return {id : todo.id, title : todo.title, description : todo.description,created_at : todo.created_at,completed : todo.completed}}});
        setTodos(updated_todos);
        localStorage.setItem('TODOS',JSON.stringify(updated_todos));
    }

    const DeleteTodo = (id:string)=>{
        const updated_todos = todos.filter(todo=>todo.id != id);
        console.log(updated_todos);
        setTodos(updated_todos);
        localStorage.setItem('TODOS',JSON.stringify(updated_todos));
    }

    return<>

    {
    (todos.length != 0 ?<>
    <div className="grid grid-cols-1 lg:grid-cols-2">
    {
    todos.map((todo)=>{
      return<div key = {todo.id}>
      <div className="m-5 bg-slate-200 p-5 rounded-md hover:bg-slate-300 transition-all">
      <p>id_{todo.id}</p>
        <p>Title : {todo.title}</p>
        <p>Description : {todo.description}</p>
        <p>Status : {todo.completed ? "Completed" : "Pending"}</p>
        <p>Created at : {todo.created_at}</p>
        {todo.completed != true ? <>
        <Button onClickFN={()=>markAsDone(todo.id)} text="Mark as done"/>
        </>:<></>
        }
        <Button onClickFN={()=>DeleteTodo(todo.id)} text="Delete"/>
      </div>
      </div>
    })
  }
    
    </div>
   
                    </>:<>
                    <div className="grid grid-cols-1">
                            <p className="text-xl italic text-center">
                                Seems like you have no tasks onboard! Add a new task & be productive!
                            </p>
                    </div>
                    </>)
        }
    </>
}