import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  content: string;
}

function Button({ content, className }: ButtonProps) {
  return (
    <div
      className={twMerge(
        'size-fit cursor-pointer rounded-md border border-beige bg-white p-2 transition-all hover:bg-dust-white',
        className,
      )}
    >
      {content}
    </div>
  );
}

export default Button;
