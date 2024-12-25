'use client';
import { useAtom } from 'jotai';
import React from 'react';

import { ChatMessageType } from '@/types/chat-message';
import getResponse from '@/utils/api';
import { convoAtom, msgAtom } from '@/utils/atoms';
import createTempMsg from '@/utils/create-temp';

import Button from '../Controls/Button';
import Input from '../Controls/Input';
import RCBoard from '../RCBoard';
function InputPanel() {
  const [msg, setMsg] = useAtom(msgAtom);
  const [convo, setConvo] = useAtom(convoAtom);
  async function handleClick() {
    if (msg === '') {
      return;
    }
    const res: string | null = await getResponse(msg);
    const newMsg: ChatMessageType[] = [
      ...convo,
      createTempMsg('USER', msg),
      createTempMsg('FINBOT', res!),
    ];
    setConvo(newMsg);
    setMsg('');
  }

  return (
    <div className='flex max-w-[90%] flex-col justify-center gap-y-5 md:max-w-[70%]'>
      <div className='flex h-fit w-full flex-row items-center gap-3'>
        <Input
          value={msg}
          onChange={(e: any) => setMsg(e.target.value)}
          placeholder='What do you want to ask?'
        ></Input>
        <Button
          onClick={handleClick}
          type='button'
          content='Enter'
          className='w-40 border-2 bg-green-200 text-center hover:bg-green-300'
        ></Button>
      </div>
      <RCBoard length={15}></RCBoard>
    </div>
  );
}

export default InputPanel;
