'use client';
import { useAtomValue } from 'jotai';
import React from 'react';

import Chat from '@/components/Chat';
import InputPanel from '@/components/InputPanel';
import { convoAtom } from '@/utils/atoms';

export default function Home() {
  const convo = useAtomValue(convoAtom);
  return (
    <div className='grid max-h-screen grid-rows-2 justify-items-center'>
      <Chat conversation={convo}></Chat>
      <InputPanel />
    </div>
  );
}
