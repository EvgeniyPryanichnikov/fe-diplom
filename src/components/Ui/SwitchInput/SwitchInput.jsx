import React from 'react'
import s from './SwitchInput.module.scss'

const SwitchInput = ({ handleSwitchInput, label, icon }) => {
  function onInputChange(e) {
    handleSwitchInput(e.target.checked)
  }

  return (
    <label className={s.switchInput}>
      <img className={s.icon} src={icon} alt="" />
      <input type='checkbox' onChange={onInputChange}/>
      <span className={s.label}>{label}</span>
      <span className={s.control}></span>
  </label>
  )
}

export default SwitchInput
