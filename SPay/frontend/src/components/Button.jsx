

export default function Button({text,Onclick}){

    return(
        <>
            <button className="text-white bg-black font-bold p-2 pl-10 pr-10 m-2 rounded-md shadow-black hover:bg-white hover:text-black w-96 mt-10" style={{outline : '2px solid black'}} onClick={Onclick}>{text}</button>
        </>
    )
}