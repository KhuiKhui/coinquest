import React from 'react';
import { twMerge } from 'tailwind-merge';

import Avatar from '@/components/Avatar';
import Message from '@/components/Message';
import { ChatMessageType } from '@/types/chat-message';
interface ChatMessageProps extends ChatMessageType {
  className?: string;
}
function ChatMessage({
  avatar,
  msgContent,
  role,
  className = '',
}: ChatMessageProps) {
  return (
    <>
      {role === 'FINBOT' ? (
        <div
          className={twMerge(
            'flex w-full flex-row items-start justify-start',
            className,
          )}
        >
          <Avatar image={avatar}></Avatar>
          <Message content={msgContent}></Message>
        </div>
      ) : (
        <div
          className={twMerge(
            'flex w-full flex-row items-start justify-end',
            className,
          )}
        >
          <Message content={msgContent}></Message>
          <Avatar image={avatar}></Avatar>
        </div>
      )}
    </>
  );
}

export default ChatMessage;
