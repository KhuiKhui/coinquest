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
    <div className='flex h-full flex-col items-center justify-between gap-y-5 py-5'>
      <Chat id='chat' conversation={convo}></Chat>
      <InputPanel />
    </div>
  );
}
