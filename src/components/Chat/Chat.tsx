import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { ChatMessageType } from '@/types/chat-message';

import ChatMessage from './ChatMessage';

interface ChatProps extends HTMLAttributes<HTMLDivElement> {
  conversation: ChatMessageType[];
}

function Chat({ conversation, className }: ChatProps) {
  return (
    <div
      className={twMerge(
        'flex size-full flex-col items-center justify-start overflow-y-scroll',
        className,
      )}
    >
      {conversation.map((message: ChatMessageType, index: number) => (
        <ChatMessage
          key={index}
          avatar={message.avatar}
          msgContent={message.msgContent}
          role={message.role}
        />
      ))}
    </div>
  );
}

export default Chat;
