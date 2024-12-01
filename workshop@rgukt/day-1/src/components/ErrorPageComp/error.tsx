import { useNavigate } from "react-router-dom"

export function ErrorPage(){
    const navigateTo = useNavigate();
    return <>
        <div className="flex-col justify-center text-center place-content-center align-middle text-3xl italic">
            <h1 className="text-red-500">
                404 Error!
            </h1>
            <p>
                Seems like you are on wrong page!
            </p>
            <p>
                Click <a className="text-blue-500 underline cursor-pointer" onClick={()=>navigateTo('/')}>here</a> to go to homepage!
            </p>
        </div>
    </>
}