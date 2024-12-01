import { useTypeTextAnimation } from "../hooks/customHoooks";

type WishMessageProps = {
    ROLE : string
}

export function WishMessage({ ROLE }: WishMessageProps) {
//   useTokenCheck();
  const typingText = useTypeTextAnimation();
  return (
    <>
      <div className="m-10 -mt-2 flex">
        <b className="text-4xl">/</b>
        <h1
          className="first-letter:text-3xl text-2xl mt-2 lg:mt-2 swipe-right"
          style={{ textShadow: "1px 1px black" }}>
          {ROLE} Dashboard
        </h1>
      </div>
      <div className="m-10 movedown">
        <h1 className="first-letter:text-3xl text-2xl mt-2 lg:mt-2 font-bold">
          Welcome back {typingText}
          <i className="transition-all animate-pulse -mt-10 opacity-0">|</i>
        </h1>
      </div>
    </>
  );
}