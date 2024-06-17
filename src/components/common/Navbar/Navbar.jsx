import React from 'react'

import s from './Navbar.module.scss'

const Navbar = () => {
	const links = [{id: 1, title: 'О нас'}, {id: 2, title: 'Как это работает'}, {id: 3, title: 'Отзывы'}, {id: 4, title: 'Контакты'}]

  return (
    <div className={s.navbar}>
      {links.map(link => (
				<span 
					className={s.item}
					key={link.id}
				>
					{link.title}
				</span>
			))}
    </div>
  )
}

export default Navbar
