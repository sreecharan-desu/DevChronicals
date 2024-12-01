import { useRecoilState } from "recoil";
import { outpassClick, outtingClick } from "../store/store";
import Card from "./card-component";
import Waitlist from "./Passes";

type OfficialsDashboardCompProps = {
  GET_WAITINGLIST : string;
  GET_GIVENPASSES : string
}

export function OfficialsDashboardComp({GET_GIVENPASSES,GET_WAITINGLIST}:OfficialsDashboardCompProps) {
    const [outPassClick, setoutPassClick] = useRecoilState(outpassClick);
    const [outinGclick, setoutinGclick] = useRecoilState(outtingClick);
    return (
      <>
        <div className="lg:grid lg:grid-cols-2 flex-col">
          <a
            onClick={() => {
              setoutinGclick(false);
              setoutPassClick(true);
              scrollTo(100, 500);
            }}>
            <Card
              imageUrl={"../../../public/student.svg"}
              title={"Grant Passes"}
            />
          </a>
          <a
            onClick={() => {
              setoutPassClick(false);
              setoutinGclick(true);
              scrollTo(100, 500);
            }}>
            <Card
              imageUrl={"../../../public/student.svg"}
              title={"Given Passes"}
            />
          </a>
        </div>
        {outPassClick ? (
          <>
            <Waitlist GET_WAITINGLIST={GET_WAITINGLIST} GET_GIVENPASSES={GET_GIVENPASSES} Header={"GRANT"} />
          </>
        ) : outinGclick ? (
          <>
            <Waitlist GET_GIVENPASSES={GET_GIVENPASSES} GET_WAITINGLIST={GET_WAITINGLIST} Header={"ACCESS"} />
          </>
        ) : (
          <></>
        )}
      </>
    );
}