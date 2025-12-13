import React from 'react'

import s from './Main-header.module.scss'
import Header from '../Header/Header'; 
import TravelDatePicker from '../../common/Travel-date-picker/Travel-date-picker';

const MainHeader = () => {
  return (
    <div className={s.mainHeader}>
      <Header />

      <TravelDatePicker />
    </div>
  )
}

export default MainHeader
