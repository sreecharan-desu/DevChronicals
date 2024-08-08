import { useNavigate } from "react-router-dom";



export function AppBar({Username}){

    const navigate = useNavigate();
    return(
        <>
            <div className="flex flex-row justify-between w-full mt-1 bg-white shadow-sm">
                <div className="font-bold text-2xl pl-1 first-letter:text-4xl">
                    SPay
                </div>
                <div className="flex flex-row justify-center">
                    <div className="mr-2 text-center pt-2 text-lg">
                        Hello 
                    </div>
                    <div className="rounded-full w-10 h-10 pt-1 pb-1 text-center text-white bg-black text-2xl mr-1 capitalize">
                        {Username[0]}
                    </div>
                    <div className="mr-2 text-center pt-2 text-lg cursor-pointer underline text-sm place-content-center" onClick={()=>{localStorage.removeItem('token');navigate('/signin')}}>
                        Logout
                    </div>
                </div>
            </div>
        </>
    )
}

