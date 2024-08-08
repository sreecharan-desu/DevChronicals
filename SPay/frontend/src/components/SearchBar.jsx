import { useSetRecoilState } from "recoil";
import { Searchbar } from "../store/DashboardStore";

export function SearchBar(){
    const setFilter = useSetRecoilState(Searchbar);

    const onchanHandler = (e)=>{
        setFilter(e.target.value)
    }
    return(
        <>
            <div className="flex flex-row justify-center place-content-center top-24 sticky bg-white">
                <input type="text" className="shadow-sm h-12 p-3 w-full m-4 rounded-sm" placeholder="Search users..." style={{outline : '1px solid black'}} onChange={onchanHandler}/>
            </div>
        </>
    )
}