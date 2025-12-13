import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux"
import {setPassengerInfo} from "../../../store/slices/ticketsSlice"
import s from './AgeSelect.module.scss'
import { ReactComponent as IconDropDown } from '../../../icons/dropdown.svg'


const AgeSelect = ({value, handleInputChange, option}) => {

  const [isOpen, setIsOpen] = useState(false)

  const options = [{id: 1, value: 'Взрослый'}, {id: 2, value: 'Детский'}]

  const handleShowOptions = useCallback(() => {
		setIsOpen(prev => !prev)
  }, [])

  function onOptionClick(value) {
    handleInputChange(option, value)
  }

  return (
    <div className={s.select} onClick={handleShowOptions}>
      <div className={s.inputContainer}>
        <input
          className={s.input}
          value={value}
          type="select"
        />

          <div>
            <IconDropDown />
          </div>
      </div>


      {isOpen && <div className={s.options}>
        {options.map(opt => <div key={opt.id} className={s.optionItem} onClick={() => onOptionClick(opt.value)}>
          {opt.value.toUpperCase()}
        </div>)}
      </div>}
    </div>
  )
}

export default AgeSelect
