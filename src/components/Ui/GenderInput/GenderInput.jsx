import React, { useState }from 'react'
import s from './GenderInput.module.scss'

const GenderInput = ({label, handleInputChange, option, value}) => {
  function onClick(newValue) {
    handleInputChange(option, newValue);
  }
  return (
    <div className={s.genderInput}>
      <label
        htmlFor="input"
        className={s.label}
      >
        {label}
      </label>

      <div className={s.inputContainer}>
        <div className={`${s.gender} ${value ? s.active : ""}`} onClick={(e) => onClick(true)}>М</div>
        <div className={`${s.gender} ${!value ? s.active : ""}`} onClick={(e) => onClick(false)}>Ж</div>
      </div>
    </div>
  )
}

export default GenderInput
