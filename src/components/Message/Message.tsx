import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface MessageProps extends HTMLAttributes<HTMLDivElement> {
  content: string;
}

function Message({ content, className }: MessageProps) {
  return (
    <div
      className={twMerge(
        'h-fit max-w-[85%] text-ellipsis text-wrap rounded-lg border border-black bg-slate-200 px-12 py-5 text-black md:max-w-[70%] md:rounded-full',
        className,
      )}
    >
      {content}
    </div>
  );
}

export default Message;
