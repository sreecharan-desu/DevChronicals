import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { SearchBar } from "./SearchBar";
import { users } from "../store/DashboardStore";
import { toAcc } from "../store/transactionStore";
import {useNavigate} from 'react-router-dom'

export function Users({Users}){
    return(
        <>
            <SearchBar/>  
            <div className="felx flex-cols m-3 bg-white shadow-sm p-3">
                {Users[0] ? <UsersList/> : <NoUsers/>}
            </div>
        </>
    )
}

function UsersList(){
    const userslist = useRecoilValue(users);
    const settoAcc = useSetRecoilState(toAcc);
    const navigate = useNavigate();
    const onclickHandler =(obj1)=>{
        settoAcc(obj1);  
        navigate('/send');
    }
    return(
        <>
            {userslist.map((user,index)=>{
                return(
                    <div key={index} className="flex felx-row justify-between shadow-sm h-20 place-content-center mb-2 rounded-lg bg-white hover:bg-gray-200 ml-0">
                        <div className="flex flex-row text-center p-2 m-4 ml-0">  
                            <div className=" bg-black text-white pt-2 w-10 h-10 rounded-full text-center capitalize">  
                                {user.username[0]}
                            </div>
                            <div className="m-3 ml-3 mr-1 mt-2 text-center text-lg first-letter:capitalize">
                               {user.username} <a className="text-gray-400 text-sm">@{user.username}</a>
                            </div>
                        </div>
                        <div className="mt-3">
                            <input type="button" value={'Send Money'} className="bg-black text-white text-sm rounded-md cursor-pointer h-9 w-30 p-2 sm:w-40 m-3 mt-4 ml-0 h-12 md: hover:bg-white hover:text-black hover:border-b-4"  placeholder="Search users..." onClick={()=>onclickHandler({userid : user._id,username : user.username})} />
                        </div>
                    </div>
                )
            })}
        </>
    )
}


function NoUsers(){
    return(
        <>
            <div className="flex justify-center text-gray-400 text-xl">
                No users found
            </div>
        </>
    )
}
