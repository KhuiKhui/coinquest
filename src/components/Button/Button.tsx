import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends HTMLDivElement {
  content: string;
}

function Button({ content, className }: ButtonProps) {
  return (
    <div className={twMerge(className, "p-2 bg-white border border-beige w-fit h-fit rounded-md hover:bg-dust-white transition-all cursor-pointer")}>{content}</div>
  );
}

export default Button;
