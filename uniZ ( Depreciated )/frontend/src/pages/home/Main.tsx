import React from "react";
import { useNavigate } from "react-router";
const Card = React.lazy(() => import("../../components/card-component"));

export default function Main() {
  const navigateTo = useNavigate();
  return (
    <>
      <div className={`moveright mt-0`}>
        <h1
          className="text-center text-4xl lg:text-6xl lg:first-letter:font-bold lg:first-letter:text-8xl"
          style={{ textShadow: "1px 1px black" }}>
          Welcome to UniZ
        </h1>
      </div>
      <div className="flex justify-center text-center moverightsub mb-10">
        <h1 className="first-letter:text-3xl text-2xl mt-2 lg:mt-2 text-center">
          An Outpass Management System
        </h1>
      </div>
      <a onClick={() => navigateTo("/student/signin")}>
        <Card imageUrl={"student.svg"} title={"Student"} />
      </a>
      <div className="flex-col lg:grid lg:grid-cols-3 justify-center place-content-center lg:m-10">
        <a onClick={() => navigateTo("/caretaker/signin")}>
          <Card imageUrl={"library-book.svg"} title={"Caretaker"} />
        </a>
        <a onClick={() => navigateTo("/warden/signin")}>
          <Card imageUrl={"learning-school.svg"} title={"Warden"} />
        </a>
        <a onClick={() => navigateTo("/dean/signin")}>
          <Card imageUrl={"university.svg"} title={"DSW"} />
        </a>
      </div>
      <a hidden onClick={() => navigateTo("/admin/signin")}>
        <Card imageUrl={"student.svg"} title={"Director"} />
      </a>
    </>
  );
}
