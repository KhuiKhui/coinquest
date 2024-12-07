import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import RCBlock from './RCBlock'

interface RCBoardProps extends HTMLAttributes<HTMLDivElement>{
    length: number
}

function RCBoard({length, className}:RCBoardProps) {
  return (
    <div className={twMerge(className, 'h-fit w-full flex-row flex space-x-3')}>
        {Array.from(Array(length).keys()).map((index) => <RCBlock key={index} content='Welcome' question='Introduce yourself'></RCBlock>)}
    </div>
  )
}

export default RCBoard