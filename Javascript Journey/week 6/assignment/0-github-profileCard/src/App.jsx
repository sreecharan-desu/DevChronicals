import React, { useEffect, useState } from 'react';
function App() {
  const [userData,setUserdata]= useState({});
  const [inputValue,setInputValue] = useState('');
  function onchangeHanlder(event){
    setInputValue(event.target.value);
  }

  async function onclickHandler(username){
    try{
      const res = await fetch(`https://api.github.com/users/${username}`)
      const data = await res.json();
      setUserdata(data);
      console.log("Data fecthed succesfully from Github-api");
    }
    catch(e){
      console.log("Error fecthng data from api\n"+e);
      setUserdata({});
      <NetworkIssue/>
    }
  }
  return(
    <>
          <div style={{display : 'flex',flexDirection : "column",textAlign : 'center',alignContent : 'center',justifyContent : 'center'}}>
            <li style={{listStyle : 'none'}}>
              Enter username : <input type={'text'} value={inputValue} onChange={onchangeHanlder}/> 
            </li>
            <br />
            <li style={{listStyle : 'none'}}>
              <input type={'button'} value={'Fetch Details'} onClick={()=>onclickHandler(inputValue)}/> 
            </li>
          </div> 
          {(userData.login != null)?(<UserDetails userData={userData}/>):<></>}
    </>
  )
}

function UserDetails({userData}){
  return(
    <>
          <hr style={{width:"90%",textAlign:"center"}}/>
          <br />
          <div style={{display : 'flex',flexDirection : "column",textAlign : 'center',alignContent : 'center',justifyContent : 'center'}}>
              <h1>
                  {userData.name}
                </h1>
                <img src={userData.avatar_url} style={{borderRadius : '50%',width : '200px',height : '200px',margin : '0px 580px'}}/>
                <p>
                  {userData.bio}
                </p>
                <p>
                  Joined : {userData.created_at.substring(0,10)}
                </p>
                <p>
                  Location : {userData.location}
                </p>
          </div> 
          <hr style={{width:"90%",textAlign:"center"}}/>

    </>
  )
}

function NetworkIssue(){
  return(
    <>
        <div style={{display : 'flex',flexDirection : "column",textAlign : 'center',alignContent : 'center',justifyContent : 'center'}}>
          <hr style={{width:"90%",textAlign:"center"}}/>
            <p>
              Sorry network issue see the console for more info..     
            </p>
          <hr style={{width:"90%",textAlign:"center"}}/>
        </div> 
    </>
  )
  
}

export default App;
