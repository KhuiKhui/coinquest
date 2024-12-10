import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TabProps extends HTMLAttributes<HTMLDivElement> {
  content: string;
}

function Tab({ content, className }: TabProps) {
  return (
    <button
      className={twMerge(
        'size-full bg-white py-4 text-center font-bold transition-all hover:bg-dust-white md:py-7',
        className,
      )}
    >
      {content}
    </button>
  );
}

export default Tab;
