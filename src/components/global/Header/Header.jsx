import React from 'react'

import s from './Header.module.scss'
import Logo from '../../common/Logo/Logo'
import Navbar from '../../common/Navbar/Navbar'

const Header = () => {
  return (
    <div className={s.header}>
			<Logo />

      <Navbar/>
    </div>
  )
}

export default Header
