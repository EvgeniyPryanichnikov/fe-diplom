import React from 'react'
import s from './SwitchInput.module.scss'

const SwitchInput = ({ input, meta, label, disabled, className, icon }) => {
  return (
    <label className={s.switchInput}>
      <img src={icon} alt="" />
      <input type='checkbox'/>
      <span className={s.label}>{'label'}</span>
      <span className={s.control}></span>
  </label>
  )
}

export default SwitchInput
