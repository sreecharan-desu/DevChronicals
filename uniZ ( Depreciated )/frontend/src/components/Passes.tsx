import { useRecoilState } from "recoil";
import { GivenPasses, WaitingOutpasses } from "../store/store";
import Button from "./button";
import { useGetRequest } from "../hooks/customHoooks";

type CareTakerDashboardProps = {
  GET_WAITINGLIST: string;
  GET_GIVENPASSES: string;
  Header : string
};

export default function Waitlist({ GET_GIVENPASSES, GET_WAITINGLIST, Header }: CareTakerDashboardProps) {

  const [WaitingList, setWaitingList] = useRecoilState(WaitingOutpasses);
  const [GivenPass, setgivenPasses] = useRecoilState(GivenPasses);

  const waitinglist = useGetRequest({ API : GET_WAITINGLIST });
  if (waitinglist != null) setWaitingList(waitinglist);
  
  const givenPasses = useGetRequest({ API : GET_GIVENPASSES });
  if (givenPasses != null) setgivenPasses(givenPasses);

  const acceptOutpass = () => {};

  const rejectOutpass = () => {};

  const ForwardOutpass = () => {};
  return (
    <>
      <div className="m-10 -mt-2 flex">
        <b className="text-4xl">/</b>
        <h1
          className="first-letter:text-3xl text-2xl mt-2 lg:mt-2 swipe-right"
          style={{ textShadow: "1px 1px black" }}>
          {Header} Passes
        </h1>
      </div>

      {Header == "GRANT" ? (
        <>
          <div className="m-10 movedown">
            {WaitingList ? (
              <>
                {WaitingList.map((pass, key) => {
                  if (pass.isExpired) {
                    return <></>;
                  } else
                    return (
                      <div
                        className={`${
                          key % 2 == 0 ? `bg-slate-200` : `bg-slate-300`
                        } px-5 py-5 text-black text-sm mb-5 rounded-lg lg:text-xl`}>
                        <div className="font-bold underline mb-2">
                          {pass.Pass}Request
                        </div>
                        <div className="lg:grid lg:grid-cols-4 grid grid-cols-2 justify-start font-bold">
                          <div className="font-bold">
                            Name : {pass.Username}
                          </div>
                          <div className="font-bold">
                            Id number : {pass.Idno}
                          </div>
                          <div className="font-bold">
                            Branch : {pass.Branch}
                          </div>
                          <div className="font-bold">
                            Section : {pass.Section}
                          </div>
                          <div className="font-bold">
                            RoomNo : {pass.RoomNo}
                          </div>
                          <div className="font-bold">{pass.Email}</div>
                        </div>
                        <div className="font-bold rounded-lg px-2 text-justify bg-yellow-200">
                          Reason : {pass.Reason}
                        </div>
                        <div className="font-bold rounded-lg px-2 mt-1 text-justify bg-yellow-200">
                          Time : {pass.FromTime} - {pass.ToTime}
                        </div>
                        <div className="grid grid-cols-3">
                          <Button
                            status="danger"
                            value="Reject"
                            onclickHandler={() => acceptOutpass}
                          />
                          <Button
                            status="safe"
                            value="Accept"
                            onclickHandler={() => rejectOutpass}
                          />
                          <Button
                            status="safe"
                            value="Forward"
                            onclickHandler={() => ForwardOutpass}
                          />
                        </div>
                      </div>
                    );
                })}
              </>
            ) : (
              <>
                <p className="text-center text-green-600 font-extrabold text-xl bg-slate-200 rounded-lg p-10">
                  Waitlist is empty
                </p>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="m-10 movedown">
            {GivenPass ? (
              <>
                {GivenPass.map((pass, key) => {
                  if (pass.isExpired) {
                    return <></>;
                  } else {
                    return (
                      <div
                        className={`${
                          key % 2 == 0 ? `bg-slate-200` : `bg-slate-300`
                        } px-5 py-5 text-black text-sm mb-5 rounded-lg lg:text-xl`}>
                        <div className="font-bold underline mb-2">
                          {pass.Pass}Request
                        </div>
                        <div className="lg:grid lg:grid-cols-4 grid grid-cols-2 justify-start font-bold">
                          <div className="font-bold">
                            Name : {pass.Username}
                          </div>
                          <div className="font-bold">
                            Id number : {pass.Idno}
                          </div>
                          <div className="font-bold">
                            Branch : {pass.Branch}
                          </div>
                          <div className="font-bold">
                            Section : {pass.Section}
                          </div>
                          <div className="font-bold">
                            RoomNo : {pass.RoomNo}
                          </div>
                          <div className="font-bold">{pass.Email}</div>
                        </div>
                        <div className="font-bold rounded-lg px-2  text-justify bg-yellow-200">
                          Reason : {pass.Reason}
                        </div>
                        <div className="font-bold rounded-lg px-2 mt-1 text-justify bg-yellow-200">
                          Time : {pass.FromTime} - {pass.ToTime}
                        </div>
                        <div className="grid grid-cols-3 m-2">
                          <b>pass Phno</b>
                          <b>Father Phno</b>
                          <b>Mother PhNo</b>
                          <b>{pass.PhoneNumber}</b>
                          <b>{pass.FatherNumber}</b>
                          <b>{pass.MotherNumber}</b>
                        </div>
                        <div className="font-bold rounded-lg px-2 mt-1 text-justify bg-white">
                          **{pass.issuedBy}
                        </div>
                      </div>
                    );
                  }
                })}
              </>
            ) : (
              <>
                <p className="text-center text-green-600 font-extrabold text-xl bg-slate-200 rounded-lg p-10">
                  No Passes Given
                </p>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}
