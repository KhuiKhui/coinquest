import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
interface InputProps extends HTMLAttributes<HTMLDivElement> {
  placeholder: string;
}
function Input({ placeholder, className }: InputProps) {
  return (
    <div
      className={twMerge(
        'flex h-10 w-full items-center rounded-lg border-2 border-black px-5',
        className,
      )}
    >
      <input
        placeholder={placeholder}
        className="size-full outline-none"
      ></input>
    </div>
  );
}

export default Input;
