import React from 'react'

import s from './Reviews-block.module.scss'
import avatar1 from '../../../../icons/avatar1.png'
import avatar2 from '../../../../icons/avatar2.png'

const ReviewsBlock = () => {
	const users = [
		{
			userId: '1',
			name: 'Екатерина Вальнова ',
			text: "Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.",
			avatar: avatar1,
		},

		{
			userId: '3',
			name: 'Евгений Стрыкало',
			text: "СМС-сопровождение до посадки, Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.",
			avatar: avatar2 ,
		},
  ];

  return (
    <section className={s.reviewsBlock} id='reviews'>
			<h2 className={s.title}>
				Отзывы
			</h2>

			<div className={s.reviewsList}>
				{users.map(user => (
					<div
					  className={s.reviewsItem}
						key={user.userId}
					>
						<img
							className={s.itemImg}
						  src={user.avatar} alt="аватар" 
						/>

						<div className={s.itemText}>
							<h3 className={s.textTitle}>{user.name}</h3>

							<p className={s.textContent}>{`"${user.text}"`}</p>
						</div>
					</div>
				))}
			</div>
	  </section>
  )
}

export default ReviewsBlock
