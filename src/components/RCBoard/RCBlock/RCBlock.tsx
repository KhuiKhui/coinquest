import { useAtom, useSetAtom } from 'jotai';
import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import Button from '@/components/Controls/Button';
import { msgAtom } from '@/utils/atoms';

interface RCBlockProps extends HTMLAttributes<HTMLDivElement> {
  content: string;
  question: string;
}

function RCBlock({ content, question, className }: RCBlockProps) {
  const setMsg = useSetAtom(msgAtom);
  return (
    <Button
      type='submit'
      onClick={() => setMsg(question)}
      content={content}
      className={twMerge('min-w-20 hover:bg-slate-200', className)}
    ></Button>
  );
}

export default RCBlock;
