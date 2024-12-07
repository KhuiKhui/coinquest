import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface TabProps extends HTMLAttributes<HTMLDivElement>{
    content: string,
}

function Tab({content, className} : TabProps) {
  return (
    <button className={twMerge("text-center font-bold size-full md:py-7 py-4 bg-white hover:bg-dust-white transition-all", className)}>
        {content}
    </button>
  )
}

export default Tab