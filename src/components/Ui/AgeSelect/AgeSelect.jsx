import React, { useEffect, useState, useCallback } from 'react'
import s from './AgeSelect.module.scss'
import { ReactComponent as IconDropDown } from '../../../icons/dropdown.svg'


const AgeSelect = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('Взрослый')

  const options = [{id: 1, value: 'Взрослый'}, {id: 2, value: 'Детский'}]

  const handleShowOptions = useCallback(() => {
		setIsOpen(prev => !prev)
  }, [])

  function onOptionClick(value) {
    setInput(value)
  }
  return (
    <div className={s.select}>
      <div className={s.inputContainer}>
        <input
          className={s.input}
          value={input}
          type="select"
        />

          <div onClick={handleShowOptions}>
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