import { ChatMessageType } from '@/types/chat-message';

export default function createTempMsg(role: string, msgContent: string) {
  const msg: ChatMessageType = {
    avatar: 'https://picsum.photos/200',
    msgContent,
    role,
  };
  return msg;
}
