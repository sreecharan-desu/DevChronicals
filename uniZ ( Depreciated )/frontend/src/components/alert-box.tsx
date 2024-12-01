import { useRecoilValue} from "recoil";
import { Alert } from "../store/store";
import { useEffect, useState } from "react";

export default function AlertBox() {
  const alert = useRecoilValue(Alert);
  const [Display, setDisplay] = useState(false);
  useEffect(() => {
    const timer1 = setTimeout(()=>setDisplay(true),200)
    const timer2 = setTimeout(() => {
      setDisplay(false);
    },3000)
    return () => {
      setDisplay(false);
      clearTimeout(timer2)
      clearTimeout(timer1);
    }
  },[alert])
      if (alert.Display) {
        if (alert.Status) {
          return (
            <>
              <div className={`bg-green-500 text-black font-bold text-xl rounded-lg w-full mx-12 py-2 lg:mx-44 lg:py-4 transition-opacity duration-300 ${Display ? `opacity-1` : `opacity-0`}`}>
                {alert.Message}
              </div>
            </>
          );
        } else {
           return (
             <>
               <div
                 className={`bg-red-500 text-black font-bold text-xl rounded-lg w-full mx-12 py-2 lg:mx-44 lg:py-4 transition-opacity duration-300 ${
                   Display ? `opacity-1` : `opacity-0`
                 }`}>
                 {alert.Message}
               </div>
             </>
           );
        }
      } else {
        if (alert.Status) {
          return (
            <>
              <div
                className={`bg-red-500 text-black rounded-lg w-full mx-12 py-2 lg:mx-44 lg:py-4 transition-opacity duration-300 ${
                  Display ? `opacity-1` : `opacity-0`
                }`}
              >
                {alert.Message}
              </div>
            </>
          );
        }
  } return (
    <>
      <div
        className={`bg-green-500 text-black rounded-lg w-full mx-12 py-2 lg:mx-44 lg:py-4 transition-opacity duration-300 opacity-0`}>
      </div>
    </>
  );
  }
