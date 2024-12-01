import { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState('');
  useEffect(() => {
    setInterval(() => {
      const time = new Date().toTimeString();
      setTime(time)
    },1000)
  },[])
  return (
    <>
      <div className="flex-col lg:grid lg:grid-cols-3 bg-slate-400 w-full p-4 text-center mt-32">
        <div className="flex-col">
          <p>
            <b className="font-extrabold ">UniZ</b> &middot; {currentYear}{" "}
            &middot; All rights reserved
          </p>
        </div>
        <div>
          <p className="lg:text-xl font-bold">Made with &hearts; by SreeCharan</p>
        </div>
        <div className="hidden lg:flex">LocalTime : {time}</div>
      </div>
    </>
  );
}
