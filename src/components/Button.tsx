import React, { Children, FC } from 'react'
import './button.css'

const Button: FC = ({ message, buttonText, children }) => {
  const myOnClick = () => {
    alert(message)
  }

  return (
    <div onClick={myOnClick} className="button">
      {children} // все что внутри
    </div>
  )
}

export default Button
