import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface MessageProps extends HTMLAttributes<HTMLDivElement> {
    content: string,
}

function Message({content, className} : MessageProps) {
  return (
    <div className={twMerge("overflow-ellipsis text-wrap px-12 py-5 rounded-lg md:rounded-full bg-slate-200 border border-black text-black h-fit max-w-[85%] md:max-w-[70%]", className)}>{content}</div>
  )
}

export default Message