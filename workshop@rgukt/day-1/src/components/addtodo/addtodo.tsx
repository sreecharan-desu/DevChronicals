/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import InputBox from '../utils/input';
import { useRecoilState } from "recoil";
import { Todos } from "../../store";
import {v4 as uuidv4} from 'uuid';
import { useTodos } from "../../customhooks/useTodos";
import { Button } from "../utils/button";

export default function AddTodo() {
  useTodos();
  interface Todo {
    id : string;
    title: string;
    description: string;
    created_at: string;
    completed : boolean;
  }

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useRecoilState<Todo[]>(Todos);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const handleAddTodo = () => {
    if (!title || !description) { alert("Please fill in both title & description first!"); } 
    else {  setTodos([...todos, {id : uuidv4() ,title, description, created_at: new Date().toString() ,completed : false}]);}
    
  };

  if(todos.length != 0)
    localStorage.setItem('TODOS',JSON.stringify(todos));


  return (
    <>
    <div className="w-full flex justify-center">
      <div className="w-72 flex-col justify-center m-10 text-center">
        <div>
          <InputBox
            Inputtype="text"
            onchangeFn={handleTitleChange}
            placeholder="Enter title"
          />
        </div>
        <div>
          <InputBox
            Inputtype="text"
            onchangeFn={handleDescriptionChange}
            placeholder="Enter Description"
          />
        </div>
        <Button onClickFN={()=>handleAddTodo()} text="Add Task"/>
      </div>
    </div>
    </>
  );
}
