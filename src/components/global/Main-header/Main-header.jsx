import React from 'react'

import s from './Main-header.module.css'
import Header from '../Header/Header'; 
import TravelDatePicker from '../../common/Travel-date-picker/Travel-date-picker';

const MainHeader = () => {
  return (
    <div className={s.main_header}>
      <Header />

      <TravelDatePicker />
    </div>
  )
}

export default MainHeader
