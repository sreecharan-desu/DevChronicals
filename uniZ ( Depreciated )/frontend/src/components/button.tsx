
type buttonProps = {
    value: string
  status: "danger" | "safe" | "normal"
    onclickHandler : ()=>void
}

export default function Button({value,status,onclickHandler}:buttonProps){
    return (
      <>
        {status == "danger" ? (
          <>
            <button
              className="bg-red-500 text-red font-bold rounded-md m-2  border-2 border-red  hover:bg-red-600 hover:border-2 hover:text-white  focus:bg-red-600 focus:border-2 focus:border-l-slate-500 focus:text-white transition-all"
              onClick={() => onclickHandler()}>
              {value}
            </button>
          </>
        ) : status == "safe" ? (
          <>
            <button
              className="bg-green-500 text-black font-bold rounded-md m-2 border-2 border-black  hover:bg-green-600 hover:border-2 hover:text-white  focus:bg-green-600 focus:border-2 focus:border-l-slate-500 focus:text-white transition-all"
              onClick={() => onclickHandler()}>
              {value}
            </button>
          </>
        ) : status == "normal" ? (
          <>
            <button
              className="bg-white text-black font-bold  rounded-md px-10 py-3 border-2 border-black m-5 mt-3 hover:bg-black hover:border-2 hover:text-white  focus:bg-black focus:border-sky-600   focus:text-white transition-all"
              onClick={() => onclickHandler()}>
              {value}
            </button>
          </>
        ) : (
          <></>
        )}
      </>
    );
}