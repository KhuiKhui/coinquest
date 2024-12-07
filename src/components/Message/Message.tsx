import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface MessageProps extends HTMLAttributes<HTMLDivElement> {
    content: string,
}

function Message({content, className} : MessageProps) {
  return (
    <div className={twMerge(className, "text-wrap px-12 py-5 rounded-full bg-slate-200 border border-black text-black size-fit")}>{content}</div>
  )
}

export default Message