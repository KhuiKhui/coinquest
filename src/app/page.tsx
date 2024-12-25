'use client';
import { useAtomValue } from 'jotai';
import React, { useEffect } from 'react';

import Chat from '@/components/Chat';
import InputPanel from '@/components/InputPanel';
import { convoAtom } from '@/utils/atoms';

export default function Home() {
  const convo = useAtomValue(convoAtom);
  function focusScroll() {
    const chat = document.getElementById('chat');
    chat!.scrollTop = chat!.scrollHeight;
  }
  useEffect(() => {
    focusScroll();
  }, [convo]);
  return (
    <div className='flex h-fit grow flex-col items-center justify-center'>
      <Chat id='chat' conversation={convo}></Chat>
      <InputPanel />
    </div>
  );
}
