import React, { useEffect, useState } from 'react';
function App() {
  const[count,setCount] = useState(0);
  const[inputValue,setInputValue] = useState(0);
  const[sum,setSum] = useState(0);

  const onclickHandler = ()=>{
    setCount(count+1);
  }
  const onchangeHandler = (event)=>{
    setInputValue(event.target.value);
  }


  useEffect(
    ()=>{
      setSum((parseInt(inputValue)*(parseInt(inputValue)+1))/2);
    },[inputValue]
  )
  return (
    <>
      <input type='button' value={`Count(${count})`} onClick={onclickHandler}/>
      <br /><br />
      <input type='text' value={inputValue} onChange={onchangeHandler}/>
      <br />
      <p>
        Sum is {sum}.
      </p>
    </>
  )
}

export default App;
