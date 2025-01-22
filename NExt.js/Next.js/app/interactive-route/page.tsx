"use client";

import { useState } from "react";


export default function Interactive() {

    const [count,setCount] = useState(0);

    const onClickHandler = () => { 
        setCount(count+1);
    }

    return (<>
        <div className="text-center flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl mb-5">
            Welcome back this is Interactive page.
            </h1>
            <p>
                Click on the below button to demonstarte the client side interactivity of Next.js
            </p>
            <button onClick={()=>onClickHandler()} className="bg-black rounded-md text-white p-2 mt-5">
                Count is {count}
            </button>
        </div>
    </>
    );
}
