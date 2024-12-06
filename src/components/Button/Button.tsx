import React from "react";

interface ButtonProps extends HTMLDivElement {
  content: string;
}

function Button({ content }: ButtonProps) {
  return (
    <div className="p-2 bg-white border border-beige w-fit h-fit rounded-md hover:bg-dust-white transition-all cursor-pointer">{content}</div>
  );
}

export default Button;
