import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
interface InputProps extends HTMLAttributes<HTMLDivElement> {
    placeholder: string,

}
function Input({placeholder, className} : InputProps) {
  return (
    <div className={twMerge('w-full h-10 rounded-lg border-2 border-black flex items-center px-5', className)}>
        <input placeholder={placeholder} className='size-full outline-none'></input>
    </div>
  )
}

export default Input