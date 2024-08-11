import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { DescriptionAtom, DisplaySelector, FilterSeector, filterValue, TitleAtom, Todos } from "./Atoms";

function Title() {
    const [TitleValue,SetTitle] =  useRecoilState(TitleAtom)
    const onchangeHandler = (e)=>{
      SetTitle(e.target.value)
    }
  
    return (
      <li style={{ listStyle: 'none' }}>
        Title : <input type="text" onChange={onchangeHandler} value={TitleValue}/>
      </li>
    )
  }
  
  
function Description() {
  
    const [DescriptionValue,SetDescription] =  useRecoilState(DescriptionAtom)
    const onchangeHandler = (e)=>{
      SetDescription(e.target.value)
    }
    
    return (
      <li style={{ listStyle: 'none' }}>
        Description: <input type="text" onChange={onchangeHandler} value={DescriptionValue}/>
      </li>
    );
  }

function Button(){
    const [todos,setTodos]  = useRecoilState(Todos)
    const todosData = useRecoilValue(DisplaySelector)
    const onclickHandler = ()=>{
        setTodos([...todos,todosData])
    }
    return(
        <>
            <input type="button" value={"Add Todo"} onClick={onclickHandler}/>
        </>
    )
}

function Display(){
    const TODOS = useRecoilValue(Todos);
        return(
                <> 
                <h1>
                    All Todos : 
                </h1>
                <br /> 
                    {
                        TODOS.map(
                            (todo)=>{
                                return(
                                    <>
                                    <li style={{listStyle : 'none'}}>Title : {todo.Title}</li> 
                                    <li style={{listStyle : 'none'}}> Description : {todo.Description}</li>
                                    <br />
                                    </>
                            )
                    })}
                </>
            )        
}

function Filter(){

    const [FilterValue,setFilter] = useRecoilState(filterValue);
    const onchangeHandler =(e)=>{
        setFilter(e.target.value);
    }
    console.log(FilterValue)
    const FilteredTodos = useRecoilValue(FilterSeector);

    return(
                <>
                <h1>
                    Filtered Todos : 
                </h1>
                <input type="text" placeholder="Enter filter"  onChange={onchangeHandler}/>
                <br /> 
                    {
                        FilteredTodos.map(
                            (todo)=>{
                                return(
                                    <>
                                    <li style={{listStyle : 'none'}}>Title : {todo.Title}</li> 
                                    <li style={{listStyle : 'none'}}> Description : {todo.Description}</li>
                                    <br />
                                    </>
                            )
                    })}
                </>
            )        
}


export function MainApp(){
    return(
        <>
            <div>
                <Title />
                <br />
                <Description/>
                <br />
                <Button/>
            </div>
            <br />
            <Filter/>
            <br />
            <Display/>
        </>
    )
}