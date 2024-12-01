import React, { Suspense} from "react"
import { useTokenCheck } from "../../hooks/customHoooks";
const Main = React.lazy(() => import("./Main"));
export default function HomePage() {
  useTokenCheck();
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center p-10">Loading Main...</div>
        }>
        <Main />
      </Suspense>
    </>
  );
}