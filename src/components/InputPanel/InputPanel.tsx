'use client';
import React, { useState } from 'react';

import Button from '../Controls/Button';
import Input from '../Controls/Input';
import RCBoard from '../RCBoard';

function InputPanel() {
  const [input, setInput] = useState<string>('');

  return (
    <div className='flex max-w-[90%] flex-col justify-center gap-y-5 md:max-w-[70%]'>
      <div className='flex h-fit w-full flex-row items-center gap-3'>
        <Input
          onChange={(e: any) => setInput(e.target.value)}
          placeholder='What do you want to ask?'
        ></Input>
        <Button
          onClick={() => console.log(input)}
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
