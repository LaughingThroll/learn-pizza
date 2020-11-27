import React from 'react'

interface ButtonTypeProps {
  onClick?: (e: React.MouseEvent) => void,
  className?: string,
  children?: React.ReactNode,
  outline?: boolean
}

const Button: React.FC<ButtonTypeProps> = ({ className, onClick, children, outline}): JSX.Element => {

  return (
    <button onClick={onClick} className={`button ${className} ${outline ? 'button--outline' : ''}`}> {children}</button>
  )
} 


export default Button