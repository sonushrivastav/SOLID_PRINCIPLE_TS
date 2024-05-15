import React from 'react'

interface IButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    text:string;
    icon?:React.ReactNode
}

const Button = (props:IButtonProps) => {
    const {text,icon,...rest} = props
  return (
    <button className="flex items-center font-bold outline-none pt-4 pb-4 pl-8 pr-8 rounded-xl bg-gray-200 text-black"
    {...rest}>
        {text}
        <div className="m-2">
        {icon}
        </div>
    </button>
  )
}

export default Button