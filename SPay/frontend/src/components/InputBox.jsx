export default function InputBox({label,placeholder,type,Onchange}){
    return(
        <>
            <div className="p-1 flex-col ">
                <div className="font-bold text-1xl p-1">
                    {label}
                </div>
                <div>
                    <input type={type} placeholder={placeholder} name = 'amount' required className="w-80 p-2 rounded shadow-sm" style={{outline : '1px solid black'}} onChange={Onchange} />
                </div>
            </div>
        </>
    )
}