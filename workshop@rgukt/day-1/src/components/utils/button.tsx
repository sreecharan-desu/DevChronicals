type ButtonProps = {
    text : string
    onClickFN : ()=>void
}

export function Button({text,onClickFN}:ButtonProps){
    return<>
        <button onClick={onClickFN} className="border-solid border-white border-2 rounded-xl px-8 py-2 bg-black text-white  hover:bg-white hover:text-black hover:border-black transition-all">{text}</button>
    </>
}