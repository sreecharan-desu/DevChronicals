/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from 'react'

const Navbar = React.lazy(()=>import('./navbar/navbar'))
// const Footer = React.lazy(()=>import('./footer/footer'))
export function Layout({children}:any){
    return<>
        <Suspense fallback={<div className='text-center p-3'>Loading Navbar...</div>}><Navbar/></Suspense>
        <Suspense fallback={<div className='text-center text-xl p-3'>Loading Page content...</div>}>{children}</Suspense>
        {/* <Suspense fallback={<div className='text-center p-3'>Loading Footer...</div>}><Footer/></Suspense> */}
    </>
}

