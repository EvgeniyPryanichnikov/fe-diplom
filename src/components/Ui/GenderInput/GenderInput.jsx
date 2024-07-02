import React, { useState }from 'react'
import s from './GenderInput.module.scss'

const GenderInput = ({label}) => {
  function onClick(value) {
    console.log(value) //TODO как правильно добавлять динамически класс ??
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
        <div className={s.gender} onClick={(e) => onClick(e.target.innerText)}>М</div>
        <div className={s.gender} onClick={(e) => onClick(e.target.innerText)}>Ж</div>
      </div>
    </div>
  )
}

export default GenderInput