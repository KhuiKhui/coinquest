import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface TabProps extends HTMLAttributes<HTMLDivElement>{
    content: string,
}

function Tab({content, className} : TabProps) {
  return (
    <button className={twMerge(className, "text-center font-bold size-full py-16 bg-white hover:bg-dust-white transition-all")}>
        {content}
    </button>
  )
}

export default Tab