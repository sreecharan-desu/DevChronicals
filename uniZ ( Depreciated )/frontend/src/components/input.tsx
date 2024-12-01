import { ChangeEventHandler } from "react";

type InputProps = {
  type: string;
  onchangeHandler: ChangeEventHandler<HTMLInputElement> | undefined | null;
  placeholder: string;
};

export default function InputBox({
  type,
  onchangeHandler,
  placeholder,
}: InputProps) {
  return (
    <>
      <div className="text-center flex">
        <input
          width="100%"
          type={type}
          className="border-gray-400 border-2 shadow-lg bg-white m-2 lg:text-lg rounded-md lg:pr-50 lg:pl-3 lg:py-3 pr-32 pl-3 py-3"
          onChange={() =>onchangeHandler}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
