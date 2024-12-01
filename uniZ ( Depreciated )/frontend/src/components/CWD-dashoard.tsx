import { OfficialsDashboardComp } from "./officials-dashboard-comp"
import { WishMessage } from "./welcomemessage"
type CDWDashboardCompProps = {
  ROLE: string
  GET_WAITINGLIST : string;
  GET_GIVENPASSES : string
}
export default function CDWDashboardComp({ ROLE,GET_GIVENPASSES,GET_WAITINGLIST }:CDWDashboardCompProps) {
  return (
      <>
        <WishMessage ROLE={ROLE} />
        <OfficialsDashboardComp GET_WAITINGLIST={GET_WAITINGLIST} GET_GIVENPASSES={GET_GIVENPASSES} />
      </>
    );

}