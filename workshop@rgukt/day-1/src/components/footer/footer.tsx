export default function Footer(){
    const currentDate = new Date().getFullYear();
    return<>
        <div className="bg-slate-400 flex justify-center text-lg"> 
            <p className="text-center text-sm">
                TaskMaster &middot; {currentDate} &middot; All rights reserved  
            </p>
        </div>
    </>
}