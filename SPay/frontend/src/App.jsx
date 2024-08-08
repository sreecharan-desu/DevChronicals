import React, { Suspense, useEffect } from 'react';
import {BrowserRouter, Routes , Route, useNavigate} from 'react-router-dom';
import {Loader} from './components/Loader'

const Signup = React.lazy(()=>import("./pages/Signup"))
const Signin = React.lazy(()=>import("./pages/Signin"))
const Dashboard = React.lazy(()=>import("./pages/Dashboard"))
const Send = React.lazy(()=>import("./pages/Send"))

//endpoints
// https://s-pay-api.vercel.app/api/v1/user/signup
// https://s-pay-api.vercel.app/api/v1/user/signin
// https://s-pay-api.vercel.app/api/v1/user/update
// https://s-pay-api.vercel.app/api/v1/user/transfer
// https://s-pay-api.vercel.app/api/v1/account/balance



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Suspense fallback = {<Loader/>}><Main/></Suspense>}/>
            <Route path="/signup" element ={<Suspense fallback = {<Loader/>}><Signup/></Suspense>}/>
            <Route path="/signin" element ={<Suspense fallback = {<Loader/>}><Signin/></Suspense>}/>
            <Route path="/dashboard" element ={<Suspense fallback = {<Loader/>}><Dashboard/></Suspense>}/>
            <Route path="/send" element ={<Suspense fallback = {<Loader/>}><Send/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Main(){
  const navigate = useNavigate();
  useEffect(()=>{
    navigate("/")
  },[])

  useEffect(()=>{
    navigate("/")
    if(localStorage.getItem('token') == null)
      navigate('/signup')
    else
      navigate('/dashboard')
  },[])
}

export default App
