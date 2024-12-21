import React from 'react';

import Chat from '@/components/Chat';
import metaConvo from '@/components/Chat/Chat.stories';
import Button from '@/components/Controls/Button';
import Input from '@/components/Controls/Input';
import metaChatbox from '@/components/Controls/Input/Input.stories';
import RCBoard from '@/components/RCBoard';

export default function Home() {
  return (
    <div className="grid max-h-screen grid-rows-2 justify-items-center">
      <Chat conversation={metaConvo!.args!.conversation!}></Chat>

      <div className="flex max-w-[90%] flex-col justify-center gap-y-5 md:max-w-[70%]">
        <div className="flex h-fit w-full flex-row items-center gap-3">
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
