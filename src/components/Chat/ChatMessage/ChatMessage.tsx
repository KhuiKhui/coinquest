import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import Avatar from '@/components/Avatar';
import Message from '@/components/Message';

interface ChatMessageProps extends HTMLAttributes<HTMLDivElement> {
  avatar: string;
  content: string;
}
function ChatMessage({ avatar, content, className }: ChatMessageProps) {
  return (
    <div className={twMerge('flex size-fit flex-row items-center', className)}>
      <Avatar image={avatar}></Avatar>
      <Message content={content}></Message>
    </div>
  );
}

export default ChatMessage;
