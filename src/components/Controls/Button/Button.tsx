import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  content: string;
  type: 'submit' | 'reset' | 'button';
  onClick: () => void;
}

function Button({ content, type, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={twMerge(
        'size-fit cursor-pointer rounded-md border border-beige bg-white p-2 transition-all hover:bg-dust-white',
        className,
      )}
    >
      {content}
    </button>
  );
}

export default Button;
