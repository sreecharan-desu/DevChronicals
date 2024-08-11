import React, { useEffect, useState } from 'react';
// function App() {

//   const [render,setRender] = useState(true);
//   useEffect(()=>{
//     setTimeout(() =>{
//         setRender(false);
//     },10000)
//   },[]) 


//   return(<>

//     {render ? <Main/> : <></>} 
//   </>)

// }


function Main(){

  const [count,setCount] = useState(0);

  useEffect(()=>{
    //this will only run first when the first time dependency changes
    console.log('component mounted')

    //this only run first when the second time dependency changes 
    return()=>{
      //this is also called as the cleanup-code
      console.log('component unmounted')
    }
  },[])


  const increaseCount =()=>{
    setCount(count+1);
  }

  return(<>
    <input type='button' onClick={increaseCount} value={count} className='bg-gray-400 w-20 h-10 m-10 rounded-lg'/>
  </>)
}



//fucntional components were intriduced to incluate life-cycle events
  //--Life-cycle events
    // when component changes 
    //when component mounts 
    //when component unmounts 
//class based components sucks really and you dont need them yaa!
//There are very issues in the repo's





//custom Hooks
  //hook which u can create that other people can use

  //rules
    //--- uses Another hook internally
    //--- start with use


  //types of cutsom Hooks
    // Data-fetching hooks

//using CustomHooks

function useTodos(){
  const [todos,setTodos] = useState([]);
  useEffect(()=>{
    const fetchTdoos = async()=>{
      const res = await fetch('');
      const data = await res.json();  
      setTodos(data);
    }
    fetchTdoos();
  },[])
  return todos;
}


// function App(){
//   const todos = useTodos();  //customHooks
//   return(<>
//     {/* {todos.map((todo)=>todo.Title)} */}
//   </>)
// }


//for this sorta data-fecthing hooks there is a popular library that vercel has created called as  the 
//    `useSWR`
// which is as follows




// import useSWR from'swr'


// const fetcher =async(url)=>{
//   const response = await fetch('server-link');
//   const data = await response.json();
//   return data;
// }


// function App(){
//   const {data,err,isLoading} = useSWR('server-link',fetcher)
//   if(err) return <>failed to load data from backend</>
//   if(isLoading) return<>is Loading...</>
//   return <>{data}</>
// }


// function App(){

// return<>

//   <h1>
//       Read the source code completely
//   </h1>
// </>

// }



function useIsonLine(){
  if(window.navigator.onLine){
    return true
  }
  else{
    return false
  }
}


function useMousePointer(){
  const [position,setPosition] = useState({x:0,y:0});
  const handleMouseMove =(e)=>{
    setPosition({x : e.clientX,y : e.clientY})
  }

  useEffect(()=>{
      window.addEventListener('mousemove',handleMouseMove);
    return()=>{
      window.removeEventListener('mousemove',handleMouseMove);
    }
  },[])

  return position;
}



function useInterval(fn,time){
  useEffect(()=>{
    const value = setInterval(()=>{
      fn()
    },time);
    return()=>{
      clearInterval(value);
    }
  })
}



function useDebounce(inputValue,timeOut){
  const [debouncedValue,setDebouncedvalue] = useState('');
  useEffect(()=>{
    const time = setTimeout(()=>{
      setDebouncedvalue(inputValue)
    },timeOut)

    return ()=>{
      clearTimeout(time)
    }
  },[inputValue]) 

  return debouncedValue;
}



// function App(){
//   // const isOnline = useIsonLine();
//   // useEffect(()=>{
//   //   const oldInterval = setInterval(()=>{
//   //     isOnline ? alert('Online') : alert('You are Offline')
//   //   },4000)

//   //   isOnline ? alert('Online') : alert('You are Offline')

//   //   return ()=>{
//   //     clearInterval(oldInterval);
//   //   }
//   // })


//   // const position = useMousePointer();
 
//   // useInterval(()=>{
//   //   alert("Hi")
//   // },4000)

//   const[inputValue,setInputvalue] = useState('');
//   const onchangeHandler =(event)=>{
//     setInputvalue(event.target.value);
//   }
//   const debouncedvalue = useDebounce(inputValue,200);
//   return<>

//     {/* Your mouse Pointer location is X:{position.x} Y:{position.y} */}

//     <input type='text' placeholder='Type some text here' onChange={onchangeHandler}/>
//     <br/>
//     <br/>
//     {"The debounced value is " + debouncedvalue}

//   </> 
// }


function App(){

return<>

  <h1 className='flex justify-center place-content-center m-10 font-bold text-4xl text-center'>
      Read the source code completely for understanding / recolleting the knowledge about the customHooks
  </h1>
</>

}



export default App
