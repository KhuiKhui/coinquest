import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { SuggestionType } from '@/types/suggestion';

import RCBlock from './RCBlock';

interface RCBoardProps extends HTMLAttributes<HTMLDivElement> {
  suggestions: SuggestionType[];
}

function RCBoard({ suggestions, className }: RCBoardProps) {
  return (
    <div
      className={twMerge(
        'flex h-fit w-full flex-row flex-wrap justify-center gap-3',
        className,
      )}
    >
      {suggestions.map((suggestion) => (
        <RCBlock
          key={suggestion.content}
          content={suggestion.content}
          question={suggestion.question}
        ></RCBlock>
      ))}
    </div>
  );
}

export default RCBoard;
