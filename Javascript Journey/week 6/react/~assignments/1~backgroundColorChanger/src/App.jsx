import React,{useEffect, useState} from 'react';
function App() {
  return(
    <>
      <h1 style={{textAlign : 'center'}}>
        Background Switcher
      </h1>
      <br />
      <ButtonBar/>
    </>
  )
}

function ButtonBar(){

  const [color,setColor] = useState('red');
  useEffect(()=>{
      const body = document.body;
      body.style.backgroundColor = color;
    },[color]
  );

  const onclickHandler = (color)=>{
    setColor(color);
  };

  return(
    <>
    <div style={{textAlign : 'center'}}>
    <input type='button' value={'Green'} onClick={()=>onclickHandler('green')}/>
      &nbsp;
      <input type='button' value={'Red'} onClick={()=>onclickHandler('red')}/>
      &nbsp;
      <input type='button' value={'Blue'} onClick={()=>onclickHandler('blue')}/>
      &nbsp;
      <input type='button' value={'Yellow'} onClick={()=>onclickHandler('yellow')}/>
      &nbsp;
      <input type='button' value={'Purple'} onClick={()=>onclickHandler('purple')}/>
      &nbsp;
      <input type='button' value={'Navy'} onClick={()=>onclickHandler('navy')}/>
      &nbsp;
      <input type='button' value={'Orange'} onClick={()=>onclickHandler('orange')}/>
      &nbsp;
      <input type='button' value={'WhiteSmoke'} onClick={()=>onclickHandler('whitesmoke')}/>
      &nbsp;
      <input type='button' value={'White'} onClick={()=>onclickHandler('white')}/>
    </div>
    </>
  )
}

export default App;
