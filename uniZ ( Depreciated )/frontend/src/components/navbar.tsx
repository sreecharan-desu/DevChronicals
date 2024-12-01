import React, { Suspense} from "react";
// import { GET_USERNAME_API } from "../apis";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Alert, AuthKey, User } from "../store/store";
const Heading = React.lazy(() => import("./heading"));
export default function Navbar() {
  const setDisplay = useSetRecoilState(Alert);
  const [Userdetails, setUserdetails] = useRecoilState(User);
  type AuthkeyProps = {
    token: string;
    link: string;
    token_name: string;
  };
  const localstorage: AuthkeyProps = useRecoilValue(AuthKey);
  return (
    <>
      <nav className="w-full sticky top-0 bg-slate-500-1/2 backdrop-blur-3xl">
        <div className="flex justify-between w-full p-4">
          <a href="/">
            <Suspense
              fallback={
                <div className="flex justify-center p-10">Loading Logo...</div>
              }>
              <div className="flex justify-between">
                <div className="w-10 h-10">
                  <img src="/university.svg" />
                </div>
                <div className="ml-3 mt-1">
                  <Heading text={`Uniz`} />
                </div>
              </div>
            </Suspense>
          </a>
          {localstorage.token_name ? (
            <>
              <div className="flex">
                <p className="font-bold text-2xl mt-4">
                  {Userdetails.Username}
                </p>
                <div
                  className="mx-4 mr-0 mt-2 bg-white w-10 h-10 rounded-full"
                  style={{
                    backgroundImage: "url('/vite.svg')",
                    backgroundSize: "cover",
                  }}></div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </>
  );
}
