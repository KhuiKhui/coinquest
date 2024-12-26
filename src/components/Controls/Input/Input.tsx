/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
interface InputProps extends HTMLAttributes<HTMLInputElement> {
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
}
function Input({ placeholder, value, onChange, className }: InputProps) {
  return (
    <div
      className={twMerge(
        'flex h-10 w-full items-center rounded-lg border-2 border-black px-5',
        className,
      )}
    >
      <input
        value={value}
        onChange={onChange}
        type='text'
        placeholder={placeholder}
        className='size-full outline-none'
      ></input>
    </div>
  );
}

export default Input;
