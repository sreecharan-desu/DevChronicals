/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Alert, User } from "../store/store";
import { AUTH_API } from "../apis";

export function useTokenCheck() {
  const navigateTo = useNavigate();
  const setDisplay = useSetRecoilState(Alert);
  const [localstorage, setlocalStorage] = useState("");
  useEffect(() => {
    const localstorageString_student = localStorage.getItem("student_token");
    const localstorageString_caretaker = localStorage.getItem("caretaker_token");
    const localstorageString_warden = localStorage.getItem("warden_token");
    const localstorageString_dean = localStorage.getItem("dsw_token");
    const localstorageString_admin = localStorage.getItem("admin_token");
    if (localstorageString_student != null) {
      setlocalStorage(localstorageString_student );
    } else if (localstorageString_caretaker != null) {
      setlocalStorage(localstorageString_caretaker);
    } else if (localstorageString_warden) {
      setlocalStorage(localstorageString_warden);
    } else if (localstorageString_dean) {
      setlocalStorage(localstorageString_dean);
    } else if (localstorageString_admin) {
      setlocalStorage(localstorageString_admin);
    } else {
      setDisplay({
        Display: true,
        Message:
          "You need to signin to access that page (Choose your role below)",
        Status: false,
      });
    }
    console.log(localstorage);
    if (localstorage == null || localstorage == undefined) {
      navigateTo("/");
      setDisplay({
        Display: true,
        Message:
          "You need to signin to access that page (Choose your role below)",
        Status: false,
      });
      setTimeout(() => scrollTo(100, 150), 3000);
    } else {
      const token = JSON.parse(localstorage);
      const validate = async () => {
        const res = await fetch(AUTH_API, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data.verified) {
          navigateTo("/");
        } else {
          setDisplay({
            Display: true,
            Message: "Invalid Token Don't play games",
            Status: false,
          });
        }
      };
      validate();
    }
  }, [localstorage, navigateTo, setDisplay]);
}

export function useTypeTextAnimation() {
  type UserProps = {
    Username: string;
    Id_number: string;
    Branch: string;
  };
  const Userdetails: UserProps = useRecoilValue(User);
  const [displayedText, setDisplayedText] = useState(" ");
  useEffect(() => {
    let index = 0;
    let temp = "";
    function TypeText() {
      if (index < Text.length) {
        temp += Text.charAt(index);
        setDisplayedText(temp);
        index++;
        setTimeout(TypeText, 100);
      }
    }
    const Text = Userdetails.Username;
    setTimeout(TypeText, 1000);
  }, [Userdetails.Username]);
  return displayedText;
}

type PostRequestProps = {
  API: string;
  BODY_DATA: string;
};

export function usePostRequest({ API, BODY_DATA }: PostRequestProps) {
  const setDisplay = useSetRecoilState(Alert);
  const [responseData, setresponseData] = useState(null);
  const navigateTo = useNavigate();
  useEffect(() => {
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
      const sendPostRequest = async () => {
        const res = await fetch(API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: BODY_DATA,
        });
        const data = await res.json();
        setresponseData(data);
      };
      sendPostRequest();
    }
  });
  return responseData;
}

type GetRequestProps = {
  API: string;
};

export function useGetRequest({ API }: GetRequestProps) {
  //DatafecthingHook
  const setDisplay = useSetRecoilState(Alert);
  const [responseData, setresponseData] = useState(null);
  const navigateTo = useNavigate();
  useEffect(() => {
    const localstorage = localStorage.getItem("token");
    if (!localstorage) {
      setDisplay({
        Display: true,
        Message:
          "FATAL : Missing Authorization header Cannot connect to server Signin again",
        Status: false,
      });
      navigateTo("/");
    } else {
      const token = JSON.parse(localstorage);
      const sendPostRequest = async () => {
        const res = await fetch(API, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setresponseData(data);
      };
      try {
        setInterval(() => {
          sendPostRequest();
          console.log("Called");
        }, 5000);
      } catch (e) {
        setDisplay({
          Display: true,
          Message: "Error sending request to server TryAgain!",
          Status: false,
        });
      }
    }
  });
  return responseData;
}

type TypeTextProps = {
  Text: string;
};

export function useTypeTextAnim({ Text }: TypeTextProps) {
  const [displayedText, setDisplayedText] = useState(" ");
  useEffect(() => {
    let index = 0;
    let temp = "";
    function TypeText() {
      if (index < Text.length) {
        temp += Text.charAt(index);
        setDisplayedText(temp);
        index++;
        setTimeout(TypeText, 100);
      }
    }
    setTimeout(TypeText, 5000);
  }, [Text]);
  return displayedText;
}
