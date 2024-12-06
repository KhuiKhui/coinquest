import React from 'react'
import { twMerge } from 'tailwind-merge'
interface InputProps extends HTMLDivElement {
    placeholder: string,

}
function Input({placeholder, className} : InputProps) {
  return (
    <div className={twMerge(className, 'w-full h-10 rounded-lg border-2 border-black flex items-center px-5')}>
        <input placeholder={placeholder} className='size-fit outline-none'></input>
    </div>
  )
}

export default Input