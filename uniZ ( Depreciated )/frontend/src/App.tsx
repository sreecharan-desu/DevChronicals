import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import {
  ADMIN_SIGNIN_API,
  CARETAKER_SIGNIN_API,
  DEAN_SIGNIN_API,
  STUDENT_SIGNIN_API,
  WARDEN_SIGNIN_API,
  GET_APPLICATION_STATUS,
  SEND_OUTPASS_REQUEST,
  SEND_OUTING_REQUEST,
  GET_WAITINGLIST,
  GET_GIVENPASSES,
  FILE_UPLOAD
} from "./apis";
const Homepage = React.lazy(() => import("./pages/home/index"));
const SigninComp = React.lazy(() => import("./components/signin-component"));
const StudentDashboard = React.lazy(() => import("./pages/student/dashboard"));
const AdminDashboard = React.lazy(() => import("./pages/admin/dashboard"));
const OthersDashboard = React.lazy(() => import("./components/CWD-dashoard"));
const ErrorPage = React.lazy(() => import("./pages/Error/ErrorPage"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route
            element={
              <SigninComp
                API={STUDENT_SIGNIN_API}
                Header="Student"
              />
            }
            path="/student/signin"
          />
          <Route
            element={
              <StudentDashboard
                GET_APPLICATION_STATUS={GET_APPLICATION_STATUS}
                SEND_OUTPASS_REQUEST={SEND_OUTPASS_REQUEST}
                SEND_OUTING_REQUEST={SEND_OUTING_REQUEST}
              />
            }
            path="/student/dashboard"
          />
          <Route
            element={
              <SigninComp
                API={CARETAKER_SIGNIN_API}
                Header="Caretaker"
              />
            }
            path="/caretaker/signin"
          />
          <Route
            element={
              <OthersDashboard
                ROLE="Caretaker"
                GET_WAITINGLIST={GET_WAITINGLIST}
                GET_GIVENPASSES={GET_GIVENPASSES}              />
            }
            path="/caretaker/dashboard"
          />

          <Route
            element={
              <SigninComp
                API={WARDEN_SIGNIN_API}
                Header="Warden"
              />
            }
            path="/warden/signin"
          />
          <Route
            element={
              <OthersDashboard
                ROLE="Warden"
                GET_WAITINGLIST={GET_WAITINGLIST}
                GET_GIVENPASSES={GET_GIVENPASSES}              />
            }
            path="/warden/dashboard"
          />

          <Route
            element={
              <SigninComp
                API={DEAN_SIGNIN_API}
                Header="DSW"
              />
            }
            path="/dean/signin"
          />
          <Route
            element={
              <OthersDashboard
                ROLE="Dean"
                GET_WAITINGLIST={GET_WAITINGLIST}
                GET_GIVENPASSES={GET_GIVENPASSES}              />
            }
            path="/dean/dashboard"
          />

          <Route
            element={
              <SigninComp
                API={ADMIN_SIGNIN_API}
                Header="Director"
              />
            }
            path="/admin/signin"
          />
          <Route element={<AdminDashboard API={FILE_UPLOAD}  />} path="/admin/dashboard" />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
