import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux"
import {setPassengerInfo} from "../../../store/slices/ticketsSlice"
import s from './DocumentTypeSelect.module.scss'
import { ReactComponent as IconDropDown } from '../../../icons/dropdown.svg'


const DocumentTypeSelect = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('Паспорт РФ')

  const options = [{id: 1, value: 'Паспорт РФ'}, {id: 2, value: 'Свидетельство о рождении'}] //, {id: 3, value: 'Водительское удостоверение'

  const handleShowOptions = useCallback(() => {
		setIsOpen(prev => !prev)
  }, [])

  function onOptionClick(value) {
    setInput(value)
  }
  return (
    <div className={s.select} onClick={handleShowOptions}>
      <div className={s.inputContainer}>
        <input
          className={s.input}
          value={input}
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

export default DocumentTypeSelect