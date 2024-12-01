import React, { Suspense } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddTodo from './components/addtodo/addtodo'
import { TodosList } from './components/displayTodos/displayTodos'
import { ErrorPage } from './components/ErrorPageComp/error'
function App() {
  return (
    <>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Suspense>
          <AddTodo/>
          <TodosList/>
        </Suspense>}/>

        <Route path="*" element={<Suspense>
          <ErrorPage/>
        </Suspense>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App