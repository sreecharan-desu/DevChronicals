import React, { Suspense, useState } from "react";
import { useSetRecoilState } from "recoil";
import { Alert } from "../store/store";
import { useNavigate } from "react-router";
const Input = React.lazy(() => import("./input"));
const Button = React.lazy(() => import("./button"));
const Heading = React.lazy(() => import("./heading"));

type SigninProps = {
  API: string;
  Header: string;
};

export default function SigninComp({ API,Header }: SigninProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setDisplay = useSetRecoilState(Alert);
  const navigateTo = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const emailHandler = (event: any) => {
    setEmail(event.target.value);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const passwordHandler = (event: any) => {
    setPassword(event.target.value);
  };

  const Signin = async () => {
    const bodyData = JSON.stringify({
      email,
      password,
    });
    console.log(bodyData)
    const res = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyData,
    });
    const data = await res.json();
    if (data.success) {
      setDisplay({
        Display: true,
        Message: data.msg,
        Status: true,
      });
      if (Header === "Student") { localStorage.setItem("student_token", data.token); navigateTo("/student/dashboard/"); }
      else if (Header === "Caretaker") { localStorage.setItem("caretaker_token", data.token); navigateTo("/caretaker/dashboard/"); }
      else if (Header === "Warden") { localStorage.setItem("warden_token", data.token); navigateTo("/warden/dashboard/"); }
      else if (Header === "DSW") { localStorage.setItem("dsw_token", data.token); navigateTo("/dsw/dashboard/"); }
      else if (Header === "Director") { localStorage.setItem("director_token", data.token); navigateTo("/admin/dashboard/"); }
    } else {
      setDisplay({
        Display: true,
        Message: "Error",
        Status: true,
      });
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
              <Heading text={`Uniz`} />
            </div>
            <br />
          </div>{" "}
          <div className="ml-2 mt-1">
            <Heading text={`${Header} Signin`} />
          </div>
        </Suspense>
        <br />
        <Suspense fallback="Loading input">
          <Input
            type={"text"}
            placeholder={`${Header}@rguktong.ac.in`}
            onchangeHandler={() => emailHandler}
          />
        </Suspense>
        <Suspense fallback="Loading input">
          <Input
            type={"text"}
            placeholder={"Password"}
            onchangeHandler={() => passwordHandler}
          />
        </Suspense>
        <div className="justify-center place-content-center">
          <Suspense fallback="Loading input">
            <Button
              value={"SignIn"}
              status={"normal"}
              onclickHandler={Signin}
            />
          </Suspense>
        </div>
      </div>
    </>
  );
}
