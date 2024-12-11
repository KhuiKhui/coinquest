import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import ChatMessage from './ChatMessage';

interface ChatProps extends HTMLAttributes<HTMLDivElement> {
  avatar: string;
  content: string;
}

function Chat({ avatar, content, className }: ChatProps) {
  return (
    <div>
      <ChatMessage
        avatar={avatar}
        content={content}
        className={className}
      ></ChatMessage>
    </div>
  );
}

export default Chat;
