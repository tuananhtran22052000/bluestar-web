import React from 'react'
import classes from './Button.module.scss'
import clsx from 'clsx'

const Button = ({text, customBtn, customText, onClick}) => {
  return (
        <div className={clsx(classes.btn, customBtn)} onClick={onClick}>
            <p className={clsx(classes.title, customText)}>{text}</p>
        </div>
  )
}

export default Button