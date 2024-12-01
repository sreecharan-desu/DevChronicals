import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ApplicationStatus } from "../../store/store";
import Card from "../../components/card-component";
import { WishMessage } from "../../components/welcomemessage";
import { useGetRequest } from "../../hooks/customHoooks";
import { useNavigate } from "react-router";
const DashboardComponent = React.lazy(
  () => import("../../components/dashboard-form-component")
);
type StudentDashboardProps = {
  GET_APPLICATION_STATUS: string;
  SEND_OUTPASS_REQUEST: string;
  SEND_OUTING_REQUEST: string;
};
export default function StudentDashboard({
  GET_APPLICATION_STATUS,
  SEND_OUTING_REQUEST,
  SEND_OUTPASS_REQUEST,
}: StudentDashboardProps) {
  const [outpassClick, setOutpassClick] = useState(false);
  const [outingClick, setOutingClick] = useState(false);
  const [application, setApplication] = useRecoilState(ApplicationStatus);
  const Application = useGetRequest({ API: GET_APPLICATION_STATUS });
  if (Application != null) setApplication(Application);
  const navigateTo = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('student_token') == undefined || localStorage.getItem('stdudent_token') == null) {
      navigateTo('/');
    } else {
      navigateTo('/student/dashboard')
    }
  },[])

  return (
    <>
      <WishMessage ROLE="Student" />
      {outpassClick ? (
        <>
          <DashboardComponent API={SEND_OUTPASS_REQUEST} Header={"Outpass"} />
        </>
      ) : outingClick ? (
        <>
          <DashboardComponent API={SEND_OUTING_REQUEST} Header={"Outing"} />
        </>
      ) : (
        <>
          <div className="bg-slate-400 m-10 p-20 text-lg lg:text-xl rounded-lg text-center">
            {application.isPresent ? (
              <>
                <p>{application.Message}</p>
              </>
            ) : (
              <>
                <p>
                  Your Outpass Status will appear here if you have applied for
                  one!
                </p>
              </>
            )}
          </div>
          <div className="lg:grid lg:grid-cols-2 flex-col">
            <a
              onClick={() => {
                setOutpassClick(true);
                setOutingClick(false);
              }}>
              <Card
                imageUrl={"../../../public/student.svg"}
                title={"Outpass"}
              />
            </a>
            <a
              onClick={() => {
                setOutingClick(true);
                setOutpassClick(false);
              }}>
              <Card imageUrl={"../../../public/student.svg"} title={"Outing"} />
            </a>
          </div>
        </>
      )}
    </>
  );
}
