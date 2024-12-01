import { useNavigate } from "react-router";

export default function Error() {
  const naviagteTo = useNavigate();
    const currentYear:number = new Date().getFullYear();
    return (
      <>
        <div className="text-center">
          <div className="bg-white text-center text-red-600 text-xl md:text-4xl lg:text-6xl">
            <p>!! 404 !!</p>
            <br />
            The page you are trying to visit doesn't exist.
            <p className="text-sm m-10">
              UniZ &middot; {currentYear} &middot; All rights reserved
            </p>
            <p className="text-xl text-black m-10">
              Clik{" "}
              <a onClick={() => naviagteTo("/")} className="underline text-blue-600 cursor-pointer">
                here
              </a>{" "}
              to go to HomePage.
            </p>
          </div>
        </div>
      </>
    );
}