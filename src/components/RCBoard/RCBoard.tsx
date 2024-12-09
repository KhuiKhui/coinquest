import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import RCBlock from "./RCBlock";

interface RCBoardProps extends HTMLAttributes<HTMLDivElement> {
  length: number;
}

function RCBoard({ length, className }: RCBoardProps) {
  return (
    <div
      className={twMerge(
        "h-fit w-full flex-row flex flex-wrap justify-center gap-3",
        className,
      )}
    >
      {Array.from(Array(length).keys()).map((index) => (
        <RCBlock
          key={index}
          content="Welcome"
          question="Introduce yourself"
        ></RCBlock>
      ))}
    </div>
  );
}

export default RCBoard;
