import { useNavigate } from "react-router-dom";

export function MainApp(){
    const navigate = useNavigate();
    function onclickHandler(color){
        navigate(`/${color}`)
    }
    return(
      <>
            <nav style={{color : 'red'}}>
            This is the fixedtop bar
            </nav>
            <br />
            <input type='button' value={'balck'} onClick={()=>onclickHandler('black')}/>
            <input type='button' value={'blue'} onClick={()=>onclickHandler('blue')}/>
            <input type='button' value={'yellow'} onClick={()=>onclickHandler("yellow")}/>
            <input type='button' value={'orange'} onClick={()=>onclickHandler('orange')}/>
          <br />
      
      </>
    )
  }
  