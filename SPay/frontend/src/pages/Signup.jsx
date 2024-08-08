import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";
import { Firstname, Lastname, Password, Username } from "../store/atoms";
import axios from "axios"
import { useState } from "react";


export default function Signup(){
    const navigate = useNavigate();

    const Navigate = ()=>{
        navigate('/signin')
    }
    document.body.style.backgroundColor = 'whitesmoke'

    const [firstname,setfirstName] = useRecoilState(Firstname);
    const [lastname,setLastName] = useRecoilState(Lastname);
    const [username,setUsername] = useRecoilState(Username);
    const [password,setPassword] = useRecoilState(Password);
    const [status,setstatus] = useState(false);
    const [signupstatus,setsignupstatus] = useState(false);
    const [signupmessage,setsigupmessage] = useState('');

    const sendDataToBackend =async ()=>{
        if(firstname == '' || lastname == '' || username == '' || password == ''){
            alert("All need to be filled")
        }
        else{

            const res = await axios.post('https://s-pay-api.vercel.app/api/v1/user/signup',
                {
                    firstname : firstname,
                    lastname : lastname,
                    username : username,
                    password : password
                }
            )

            const Data  =res.data;
            console.log(Data)
            setstatus(true);
            if(Data.msg){
                setsignupstatus(true);
                setsigupmessage(Data.msg);
            }
            else if(Data == 'Invalid Inputs'){
                setsignupstatus(false);
                setsigupmessage(Data)       
            }
            else{
                setsignupstatus(false);
                setsigupmessage(Data)
            }

        }
    }

    const onclickHandler =()=>{
        navigate('/signin')
    }
    
    return(
        <>
                {status?(signupstatus?(<div className="m-10 bg-green-500 text-white font-bold p-3 shadow-orange-50 mb-0 text-center rounded-lg">
                    {signupmessage} <a className="underline cursor-pointer" onClick={Navigate}>Sign in</a> now !
                    </div>) : (<div className="m-10 bg-red-500 text-white font-bold p-3 shadow-orange-50 mb-0 text-center rounded-lg">
                        {signupmessage}
                    </div>)
                ):<></>}
            <div className="flex flex-col place-items-center shadow-lg mt-10 m-10 mb-0 rounded-sm">
                    <Heading label={'Signup'}/>
                    <SubHeading text={'Join SPay'}/>
                    <InputBox placeholder = {'sree'} label  = {'Firstname'} type={'text'} Onchange={e=>setfirstName(e.target.value)} />
                    <InputBox placeholder = {'charan'} label  = {'Lastname'} type={'text'} Onchange={e=>setLastName(e.target.value)}/>
                    <InputBox placeholder = {'sreecharan'} label  = {'Username'} type={'text'} Onchange={e=>setUsername(e.target.value)}/>
                    <InputBox placeholder = {'Password'} label  = {'Password'} type={'password'} Onchange={e=>setPassword(e.target.value)}/>
                    <Button text={"Signup"} Onclick={sendDataToBackend}/>
                    <BottomWarning>
                        Already have an account <a onClick={onclickHandler} className="underline cursor-pointer">Sign in</a>
                    </BottomWarning>
            </div>
        </>
        
    )
}