import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import Tab from './Tab';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}
function Header({ className }: HeaderProps) {
  return (
    <div
      className={twMerge(
        'flex size-full flex-row divide-x divide-dashed divide-black border-b-2 border-black',
        className,
      )}
    >
      <Tab content='FinBot'></Tab>
      <Tab content='FinLang'></Tab>
    </div>
  );
}

export default Header;
