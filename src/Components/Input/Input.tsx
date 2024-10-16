import React from 'react'
import './Input.css'

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  type: 'text' | 'password';
  name: string;
}

export default function Input({label, type, name, ...props}: InputProps) {
  return (
    <div className='div-input'>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} {...props}/>
    </div>

  )
}
