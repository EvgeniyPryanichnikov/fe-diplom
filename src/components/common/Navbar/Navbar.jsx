import React from 'react'

import s from './Navbar.module.scss'

const Navbar = () => {
	const links = [
	  {id: 1, title: 'О нас', name: '#about'},
	  {id: 2, title: 'Как это работает', name: '#how-to-work'}, 
	  {id: 3, title: 'Отзывы', name: '#reviews'}, 
	  {id: 4, title: 'Контакты', name: '#contacts'}]

  return (
    <div className={s.navbar}>
      {links.map(link => (
				<a 
					className={s.item}
					href={link.name}
					key={link.id}
				>
					{link.title}
				</a>
			))}
    </div>
  )
}

export default Navbar
