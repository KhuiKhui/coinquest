import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  content: string;
}

function Button({ content, className }: ButtonProps) {
  return (
    <div
      className={twMerge(
        "p-2 bg-white border border-beige w-fit rounded-md h-fit hover:bg-dust-white transition-all cursor-pointer",
        className,
      )}
    >
      {content}
    </div>
  );
}

export default Button;
