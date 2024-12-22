import React from 'react';

import Chat from '@/components/Chat';
import metaConvo from '@/components/Chat/Chat.stories';
import InputPanel from '@/components/InputPanel';

export default function Home() {
  return (
    <div className="grid max-h-screen grid-rows-2 justify-items-center">
      <Chat conversation={metaConvo!.args!.conversation!}></Chat>
      <InputPanel />
    </div>
  );
}
