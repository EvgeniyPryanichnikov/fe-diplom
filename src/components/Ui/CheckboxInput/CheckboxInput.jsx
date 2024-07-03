import React, {useState} from 'react'
import s from './CheckboxInput.module.scss'

const CheckboxInput = () => {
  function use(value) {
    console.log(value)
  }
  return (
    <label htmlFor="input" className={s.label}>
      <input type="checkbox" onClick={(e) => use(e)} className={s.input} id='input'/>

      <span className={s.text}>
        ограниченная подвижность
      </span>
    </label>
  )
}

export default CheckboxInput