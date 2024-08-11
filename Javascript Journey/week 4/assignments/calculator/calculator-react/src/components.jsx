import {evaluate} from 'mathjs'

export function Main(props){
    return(
      <div className="card" style={{border : 'none'}}>
        <div style={{display : 'grid',placeItems : 'center'}}>
          <div className="card" style={{width: '28rem'}}>
            <Display Display = {props.Display} setDisplay = {props.setDisplay}/>
            <br />
            <Buttons Buttons = {props.Buttons} Display = {props.Display} setDisplay = {props.setDisplay}/>
          </div>
        </div>
    </div>
    )
  }
  
  
export function Display(props){
    return(
      <>
        <input type="text" className="form-control"  value={props.Display} style={{textAlign : 'center'}} readOnly/>
      </>
    )
  }
  
  
  
export function Buttons(props){
    const onchangeHandler = (value)=>{
      switch(value){
        case '=': caluculate(props.Display); break;
        case 'C': clearDisplay(); break;
        case '⌫': backSpace(); break;
        default: DisplayText(value);
      }    
    }
    const caluculate = (expression) => {
      if(expression == '' || expression == undefined){
        props.setDisplay('');
      }
      else{
        expression = expression.replace('X', '*').replace('÷', '/');//replacing the expressions with computer understandable formats
        props.setDisplay(evaluate(expression)); //evaluate method from `mathjs` is used for evaluating the string expressions
      }
    };
  
    const clearDisplay = ()=>{
      props.setDisplay('');
    }
  
    const backSpace = ()=>{
      let len = (props.Display).length;
      let newtext = props.Display.replace(props.Display[len-1],'');
      props.setDisplay(newtext);
    }
  
    const DisplayText = (value)=>{
      let displayText = props.Display + value;
      props.setDisplay(displayText);
    }
  
    return(
      <div style={{display : 'grid',placeItems : 'center'}}>
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '323px'}}>
          {props.Buttons.map((btn, index) => (
            <input
              type="button"
              className="btn btn-light"
              style={{ width: '70px', height: '70px', borderRadius: '50%', margin: '4px',fontSize : '24px',fontStyle : 'oblique' , backgroundColor : 'whitesmoke'}}
              key={index}
              onClick={() => { onchangeHandler(btn) }}
              value={btn}
            />
          ))}
        </div>  
      </div>
    )
  }