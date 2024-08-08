import { useRecoilState, useRecoilValue } from "recoil"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import { amount, fromAcc, toAcc, transactionSatus } from "../store/transactionStore"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function Send(){

    document.body.style.backgroundColor = "whitesmoke"

    const fromAccount = useRecoilValue(fromAcc)
    const toAccount = useRecoilValue(toAcc)
    const [AmounttoSend,setAmount] = useRecoilState(amount)
    const [status,setStatus] = useRecoilState(transactionSatus);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem('token'))
            navigate('/signin')
    },[])
    
    const Navigate = ()=>{
        navigate('/dashboard')
    }
    
    const onclickHandler = async()=>{

        if(AmounttoSend == '' || AmounttoSend == '0' || AmounttoSend[0] == '0'){
            alert('You must send atleast Rs.1')
        }else{
            const payload = {
                amount : AmounttoSend,
                to : toAccount.userid
        }
        const res = await fetch('https://s-pay-api.vercel.app/api/v1/user/transfer',{
            method : 'POST',
            body : JSON.stringify(payload),
            headers : {
                'Content-Type': 'application/json',
                token : JSON.parse(localStorage.getItem('token'))
            }
        })
        const data = await res.json();
        console.log(data);
        if(data.success){
            setStatus({
                start : true,
                success : true
            })
        }
        else{
            setStatus({
                start : true,
                success : false
            })
        }
        }
    }

    if(fromAccount==null || toAccount == null){
        return(
            <div className="bg-white w-semi-full shadow-lg  text-center m-96 mt-40 mb-0  place-content-center rounded-lg p-10">
                <Heading label={'First select a person to send money'} className="p-10"/>
                {
                    useEffect(()=>{
                        setTimeout(()=>{   
                            navigate('/dashboard')    
                        },1000)
                    },[])
                }
            </div>
        )
    }
    else{
        return(
            <>  
                {status.start?(status.success ? (<div className="m-10 bg-green-500 text-white font-bold p-3 shadow-orange-50 mb-0 text-center rounded-lg">
                        Transaction Successfull <a className="underline cursor-pointer" onClick={Navigate}>Click here</a> to go to dashboard . .
                    </div>) : (<div className="m-10 bg-red-500 text-white font-bold p-3 shadow-orange-50 mb-0 text-center rounded-lg">
                        Transaction Failed Try again directing you to dashboard . .
                    </div>)
                ):<></>}
                <div className="bg-white w-semi-full shadow-lg  text-center m-2 mb-0  place-content-center rounded-lg">
                    <Heading label={'Send Money'}/>
                    <div className="flex flex-row justify-start m-20 ml-10 mt-12 mb-0">
                        <div className="w-12 h-12 bg-green-500 text-center text-3xl font-semibold rounded-full place-content-center text-white capitalize">
                            {toAccount.username[0]}
                        </div>
                        <div className="font-semibold text-black place-content-center m-3 text-xxl first-letter:text-2xl first-letter:capitalize">
                            {toAccount.username} <a className="text-gray-400">@{toAccount.username}</a>
                        </div>
                    </div>
                    <div className="flex flex-row justify-start m-20 ml-10  mt-4 mb-0 text-md text-gray-700">
                        Amount in Rs
                    </div>
                    <div className="flex flex-row justify-start ml-5 mt-4 mb-0 mr-0 text-md text-gray-500">
                        <InputBox placeholder={"Rs.10,000"} type={'number'} Onchange={(event)=>{setAmount(event.target.value)}}/>
                    </div>
                    <div className="w-10 place-content-center m-10 ml-5">
                        <input type="button" value={'Intiate Transaction'} className="cursor-pointer bg-green-500 text-white font-semibold p-3 rounded-md w-80 hover:bg-white hover:text-green-500 outline-green-500" style={{outline : "2px solid lightgreen"}} onClick={onclickHandler}/>
                    </div>
                </div>
            </>
        )
    }

}