import React, {useState} from 'react'
import s from './CheckboxInput.module.scss'

const CheckboxInput = ({label, id, handleInputChange, option, value}) => {
  function use(value) {
    console.log(id)
    handleInputChange(option, value, id);
  }

  return (
    <label htmlFor={id || "input"} className={s.label}>
      <input type="checkbox" checked={value} onClick={(e) => use(e.target.checked)} className={s.input} id={id || "input"}/>

      <span className={s.text}>
        {label}
      </span>
    </label>
  )
}

export default CheckboxInput
