import Button from '@/components/Controls/Button'
import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface RCBlockProps extends HTMLAttributes<HTMLDivElement>{
    content: string,
    question: string,
}

function RCBlock({content, question, className}:RCBlockProps) {
  return (
    <Button content={content} className={twMerge(className, "")}></Button>
  )
}

export default RCBlock