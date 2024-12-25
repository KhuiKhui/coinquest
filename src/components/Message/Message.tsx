import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface MessageProps extends HTMLAttributes<HTMLDivElement> {
  content: string;
}

function Message({ content, className }: MessageProps) {
  return (
    <div className={twMerge('h-fit max-w-[85%] md:max-w-[60%]', className)}>
      {content}
    </div>
  );
}

export default Message;
