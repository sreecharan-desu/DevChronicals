import React,{useState} from 'react';
import { UserDetails,NetworkIssue } from './components';
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
    <h1 style={{textAlign : 'center',margin : '10px '}}>
      Github Pofile-card Generator
    </h1>
                  <br />
                  <br />
    <div className="card" style={{marginLeft:"450px",width: "28rem",display : 'flex',flexDirection : "column",textAlign : 'center',alignContent : 'center',justifyContent : 'center'}}>
      <div className={"card-body"}> 
            <div >
                  <br />
                      <div className={"input-group mb-3"}>
                        <span className={"input-group-text"} id={"basic-addon1"}>Username</span>
                        <input type={'text'} value={inputValue} onChange={onchangeHanlder} className={"form-control"} placeholder={""} aria-label={"Username"} aria-describedby={"basic-addon1"} />
                      </div>
                  <br />
                  <input type={'button'} value={'Fetch Details'} onClick={()=>onclickHandler(inputValue)} className={"form-control bg-secondary color-white"} placeholder={""} aria-label={"Username"} aria-describedby={"basic-addon1"} />
            </div>  
      </div>
    </div>
          
          {(userData.login != null)?(<UserDetails userData={userData}/>):<></>}
    </>
  )
}

export default App;
