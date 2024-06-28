import React from 'react'
import s from './Carriage-type.module.scss'
import { SelectionButtons } from './Selection-buttons/Selection-buttons'

const CarriageType = () => {
  return (
    <div className={s.carriageType}>
      <h3 className={s.title}>Тип вагона</h3>

      <SelectionButtons />
    </div>
  )
}

export default CarriageType
