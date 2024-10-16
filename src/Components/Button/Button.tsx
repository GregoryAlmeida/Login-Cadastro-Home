import React from 'react'
import './Button.css'

type ButtonProps = React.ComponentProps<'button'> & React.PropsWithChildren

export default function Button({children, ...props}: ButtonProps) {
  return (
    <button {...props}>
      {children}
    </button>
  )
}
