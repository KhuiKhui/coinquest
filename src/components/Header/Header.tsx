import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import Tab from './Tab'

interface HeaderProps extends HTMLAttributes<HTMLDivElement>{}
function Header({className}:HeaderProps) {
  return (
    <div className={twMerge("divide-x divide-black divide-dashed border-b-2 border-black flex flex-row w-full h-fit", className)}>
        <Tab content='FinBot'></Tab>
        <Tab content='FinLang'></Tab>
    </div>
  )
}

export default Header