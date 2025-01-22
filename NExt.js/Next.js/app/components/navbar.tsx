"use client";

import { useRouter } from "next/navigation";

export default function Navbar(){

    const router = useRouter();

    return<>
        <nav className="sticky top-0">
            <ul className="flex flex-row space-x-4 bg-black text-white p-4">
                <li className="hover:underline cursor-pointer" onClick={()=>router.push('/')}>Home</li>
                <li className="hover:underline cursor-pointer" onClick={()=>router.push('/static-route')}>Static route</li>
                <li className="hover:underline cursor-pointer" onClick={()=>router.push('/interactive-route')}>Interactive route</li>
            </ul>
        </nav>
    </>
} 