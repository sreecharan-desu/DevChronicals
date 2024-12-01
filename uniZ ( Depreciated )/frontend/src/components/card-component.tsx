
type cardProps = {
    imageUrl: string,
    title : string
}


export default function Card({imageUrl,title}:cardProps) {
    return (
      <>
        <div className="flex justify-center w-full movecarddown">
          <div
            className="bg-slate-200 hover:bg-slate-300 py-10 rounded-lg shadow-lg w-full m-10  px-20 cursor-pointer transition-all hover:shadow-2xl"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <div
              className="rounded-full shadow-xl w-40 h-40"
              style={{
                backgroundImage: `url(/${imageUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}></div>
            <p className="text-xl lg:text-2xl m-5 text-center">{title}</p>
          </div>
        </div>
      </>
    );
}