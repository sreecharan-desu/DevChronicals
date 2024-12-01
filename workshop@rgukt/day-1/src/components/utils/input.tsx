/* eslint-disable @typescript-eslint/no-explicit-any */
type InputProps  = {
    Inputtype : "text" | "number",
    onchangeFn : any,
    placeholder : string
}

export  default function InputBox({Inputtype,onchangeFn,placeholder}:InputProps){
    return<>
        <input className="p-3 m-2 w-full rounded-md" style={{border : '2px solid black'}} placeholder={placeholder} type={Inputtype} onChange={onchangeFn}/>
    </>
}