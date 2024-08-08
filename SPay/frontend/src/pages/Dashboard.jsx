import { useEffect } from "react";
import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {Searchbar, users,AppBarStroe, balance} from "../store/DashboardStore";
import { fromAcc } from "../store/transactionStore";
import { useNavigate } from "react-router-dom";


export default function Dashboard(){


    const filter = useRecoilValue(Searchbar);
    const [userslist,setUsersList] = useRecoilState(users);
    const [Appbar,setAppbar] = useRecoilState(AppBarStroe);
    const [bal,setbal] = useRecoilState(balance);
    const setfromAcc = useSetRecoilState(fromAcc);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem('token'))
            navigate('/signin')
    },[])

    useEffect(()=>{
        const fetchBalance = async()=>{
            const response = await fetch('https://s-pay-api.vercel.app/api/v1/account/balance',{
                method : 'GET',
                headers : {
                    'Content-Type' : 'application/json',
                    token : JSON.parse(localStorage.getItem('token'))
                }
            })
            function formatNumber(num) {
                return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            }
            const balance = await response.json();
            const formattedNumber = formatNumber(balance.balance);
            // console.log(formattedNumber)
            setbal(formattedNumber);
        }
        fetchBalance();
    },[])

    useEffect(
    ()=>{
        const fetchData = async()=>{
            const res = await fetch(`https://s-pay-api.vercel.app/api/v1/user/bulk?filter=${filter}`,{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                    token : JSON.parse(localStorage.getItem('token'))
                }
            })
            const data = await res.json();
            setUsersList(data.list_of_users);
            setfromAcc(data.current_user);
            setAppbar(data.current_user.username);
        }
        fetchData();
    },[filter]
    )
    return(
        <>
            <div className="top-0 sticky bg-white">
                <AppBar Username={Appbar}/>
                <Balance Balance = {bal}/>
            </div>
            <Users Users = {userslist}/>
        </>
    )
}