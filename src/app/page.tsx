import React from 'react';

import Button from '@/components/Controls/Button';
import Input from '@/components/Controls/Input';
import metaChatbox from '@/components/Controls/Input/Input.stories';
import Message from '@/components/Message';
import metaMessage from '@/components/Message/Message.stories';
import RCBoard from '@/components/RCBoard';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-16 p-5">
      <div className="grid gap-10">
        <Message content={metaMessage!.args!.content!}></Message>

        <Message
          content={metaMessage!.args!.content!}
          className="justify-self-end"
        ></Message>
      </div>
      <div className="flex max-w-[90%] flex-col items-center justify-center gap-y-5 md:max-w-[70%]">
        <div className="flex size-full flex-row items-center gap-3">
          <Input placeholder={metaChatbox!.args!.placeholder!}></Input>
          <Button
            content="Enter"
            className="w-40 border-2 bg-green-200 text-center hover:bg-green-300"
          ></Button>
        </div>
        <RCBoard length={15}></RCBoard>
      </div>
    </div>
  );
}
