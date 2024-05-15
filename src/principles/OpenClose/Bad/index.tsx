import React from "react";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  role?: "back" | "forward" | "main" | "not-found";
  icon?: React.ReactNode;
}

const Button = (props: IButtonProps) => {
  const { text, role, icon } = props;

  return (
    <button
      className="flex items-center font-bold outline-none pt-4 pb-4 pl-8 pr-8 rounded-xl bg-gray-200 text-black"
      {...props}
    >
      {text}
      <div className="m-2">
        {role === "forward" && <HiOutlineArrowNarrowRight />}
        {role === "back" && <HiOutlineArrowNarrowLeft />}
        {icon}
      </div>
    </button>
  );
};

const Bad = () => {
  return (
    <div className="text-center">
      <h2>Bad Approach</h2>
      <div className="flex mt-4 gap-3">
        <Button text="Back" role="back" />
        <Button text="Forward" role="forward" />
      </div>
    </div>
  );
};

export default Bad;
