import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux"
import {setPassengerInfo} from "../../../store/slices/ticketsSlice"
import s from './DocumentTypeSelect.module.scss'
import { ReactComponent as IconDropDown } from '../../../icons/dropdown.svg'
import {
  DocumentType
} from "../../global/Passenger-content/Passenger-list/Passenger-item/Person-details-block/Person-details-block";


const DocumentTypeSelect = ({onSelect, value}) => {

  const [isOpen, setIsOpen] = useState(false)

  const options = [{id: 1, name: 'Паспорт РФ', value: DocumentType.PASSPORT}, {id: 2, name: 'Свидетельство о рождении', value: DocumentType.BIRTHDAY_CERTIFICATE}] //, {id: 3, value: 'Водительское удостоверение'

  const handleShowOptions = useCallback(() => {
		setIsOpen(prev => !prev)
  }, [])

  function onOptionClick(value) {
    console.log("select", value)
    onSelect(value)
  }

  console.log(value)

  return (
    <div className={s.select} onClick={handleShowOptions}>
      <div className={s.inputContainer}>
        <input
          className={s.input}
          value={value === DocumentType.PASSPORT ? 'Паспорт РФ' : value === DocumentType.BIRTHDAY_CERTIFICATE ? 'Свидетельство о рождении' : ''}
          type="select"
        />

          <div>
            <IconDropDown />
          </div>
      </div>


      {isOpen && <div className={s.options}>
        {options.map(opt => <div key={opt.id} className={s.optionItem} onClick={() => onOptionClick(opt.value)}>
          {opt.name.toUpperCase()}
        </div>)}
      </div>}
    </div>
  )
}

export default DocumentTypeSelect
