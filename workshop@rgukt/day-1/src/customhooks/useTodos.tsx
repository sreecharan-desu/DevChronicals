import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Todos } from "../store";

export function useTodos(){
    const [todos, setTodos] = useRecoilState<Todo[]>(Todos);
    const [new_todos,setNewTodos] = useState<Todo[]>();
    interface Todo {
        id : string;
        title: string;
        description: string;
        created_at: string;
        completed : boolean;
      }
    useEffect(()=>{
        const localstorage = localStorage.getItem('TODOS');
        if(todos.length == 0 && localstorage){
          if(JSON.parse(localstorage).length != 0)
            setTodos(JSON.parse(localstorage))
        }
        setNewTodos(todos);
    },[todos,setTodos])
    return new_todos;
}