/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense, useState } from "react";
import { useSetRecoilState } from "recoil";
import { Alert} from "../store/store";
import { useNavigate } from "react-router";
import { useTypeTextAnim } from "../hooks/customHoooks";
const Button = React.lazy(() => import("./button"));
const Heading = React.lazy(() => import("./heading"));

type DashboardProps = {
  API: string;
  Header: string;
};

export default function DashboardComponent({ API, Header }: DashboardProps) {
  const navigateTo = useNavigate();
  const TypingText = useTypeTextAnim({ Text: "Enter your reason here.." }); 
  const setDisplay = useSetRecoilState(Alert);
  const [reason, setReason] = useState("");
  const [fromDate, setfromDate] = useState(null);
  const [toDate, settoDate] = useState(null);
  const ReasonHandler = (event: any) => {
    setReason(event.target.value);
  };
  const FORMfromDateAndTimeHandler = (event: any) => {
    setfromDate(event.target.value);
  };
  const FORMToDateAndTimeHandler = (event: any) => {
    settoDate(event.target.value);
  };
  const sendRequest = async () => {
    if (reason == "") {
      setDisplay({
        Display: true,
        Message: "Please fill in the reason",
        Status: false,
      });
      return;
    } else if (fromDate == null || toDate == null) {
      setDisplay({
        Display: true,
        Message: "Please fill in both From-date and To-date Fields",
        Status: false,
      });
      return;
    } else {
      const localstorage = localStorage.getItem("token");
      if (!localstorage) {
        setDisplay({
          Display: true,
          Message: "FATAL : Missing Authorization header",
          Status: false,
        });
        navigateTo("/student/signin");
      } else {
        const token = JSON.parse(localstorage);
        const res = await fetch(API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ` + token,
          },
        });
        const data = await res.json();
        if (data.success) {
          setDisplay({
            Display: true,
            Message: data.msg,
            Status: true,
          });
          console.log({
            reason,
            fromDate,
            toDate,
          });
          navigateTo("/student/dashboard");
        } else {
          setDisplay({
            Display: true,
            Message: data.msg,
            Status: false,
          });
          console.log({
            reason,
            fromDate,
            toDate,
          });
          navigateTo("/student/dashboard");
        }
      }
    }
  };

  return (
    <>
      <div
        className="bg-white shadow-xl mt-10 mx-4 lg:mx-96 rounded-md p-20 max-h-screen movedown"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <Suspense fallback="Loading Heading">
          <div className="flex justify-between">
            <div className="w-10 h-10">
              <img src="/university.svg" />
            </div>
            <div className="ml-2 mt-1">
              <Heading text={`${Header} Request`} />
            </div>
            <br />
          </div>
        </Suspense>
        <br />
        <div className="flex-col justify-center lg:ml-10">
          <div>
            <Suspense fallback="Loading input">
              <div className="ml-0 text-xl">Reason :</div>
              <textarea
                rows={2}
                cols={40}
                placeholder={TypingText}
                className="p-2 w-full mr-3 lg:-mr-10 mt-0 border-2 border-black"
                onChange={ReasonHandler}></textarea>
            </Suspense>
          </div>

          {Header == "Outpass" ? (
            <>
              <div className="m-3 ml-0">
                <Suspense fallback="Loading input">
                  <div className="ml-0 text-xl">Time period :</div>
                  <div className="lg:grid lg:grid-cols-3 m-5">
                    <div className="lg:mt-0 lg:-ml-10 lg:m-0">
                      <input
                        type="date"
                        onChange={FORMfromDateAndTimeHandler}
                      />
                    </div>
                    <div className="text-center font-bold"> To </div>
                    <div>
                      <input type="date" onChange={FORMToDateAndTimeHandler} />
                    </div>
                  </div>
                </Suspense>
              </div>
            </>
          ) : Header == "Outing" ? (
            <>
              <div className="m-3 ml-0">
                <Suspense fallback="Loading input">
                  <div className="ml-0 text-xl">Time period :</div>
                  <div className="lg:grid lg:grid-cols-3 m-5">
                    <div className="lg:mt-0 lg:-ml-10 lg:m-0">
                      <input
                        type="time"
                        onChange={FORMfromDateAndTimeHandler}
                      />
                    </div>
                    <div className="text-center font-bold"> To </div>
                    <div>
                      <input type="time" onChange={FORMToDateAndTimeHandler} />
                    </div>
                  </div>
                </Suspense>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="justify-center place-content-center">
          <Suspense fallback="Loading input">
            <Button
              value={`Send Request`}
              status={"normal"}
              onclickHandler={sendRequest}
            />
          </Suspense>
        </div>
        <p>
          Click{" "}
          <a
            onClick={() => {
              location.href = "/student/dashboard";
            }}
            className="underline font-bold cursor-pointer">
            here
          </a>{" "}
          to go to dahboard
        </p>
      </div>
    </>
  );
}
