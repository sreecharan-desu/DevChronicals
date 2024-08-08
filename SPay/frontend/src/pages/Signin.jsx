import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import { SigninPassword, SigninUsername } from "../store/atoms";
import { useRecoilState } from "recoil";
import axios from "axios";

export default function Signin(){
    const navigate = useNavigate();
    const onclickHandler =()=>{
        navigate('/signup')
    }
    document.body.style.backgroundColor = 'whitesmoke'

    const [username,setUsername] = useRecoilState(SigninUsername);
    const [password,setPassword] = useRecoilState(SigninPassword);
    
    async function signInUser(){

        if(username == '' || password == ''){
            alert("You should have username and password")
        }

            const res = await axios.post('https://s-pay-api.vercel.app/api/v1/user/signin',
                {
                    username : username,
                    password : password
                }
            )
            const Data  =res.data; 
            if(Data.token){
                localStorage.setItem('token',JSON.stringify(Data.token))
                // localStorage.removeItem('token') ----> LogOut
                if(Data.success){
                    navigate('/dashboard')
                }
            }
            else{
                console.log(Data.msg)
            }
        }

    return(
        <>
        <div className="flex flex-col place-items-center shadow-lg rounded-md w-full mt-40">
            <Heading label={'Signin'}/>
            <SubHeading text={'Hi there welcome back!'}/>
            <InputBox placeholder = {'Username'} label  = {'Username'} type={'text'} Onchange={e=>setUsername(e.target.value)}/>
            <InputBox placeholder = {'Password'} label  = {'Password'} type={'password'} Onchange={e=>setPassword(e.target.value)}/>
            <Button text={"Signin"} Onclick={signInUser}/>
            <BottomWarning>
                New to here! &nbsp; <a onClick = {onclickHandler} className="underline cursor-pointer"> Sign up </a>
            </BottomWarning>
        </div>
        </>
    )

}