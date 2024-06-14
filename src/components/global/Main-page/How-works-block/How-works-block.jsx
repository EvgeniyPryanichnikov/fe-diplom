import React from 'react'

import s from './How-works-block.module.css'
import computer from '../../../../icons/computer.svg'
import city from '../../../../icons/city.svg'
import globe from '../../../../icons/globe.svg'


const HowWorksBlock = () => {
  return (
    <section className={s.howWorksBlock}>
			<div className={s.wrapper}>
				<div className={s.head}>
					<h2>Как это работает</h2>

					<button className={s['button-find']}>
						Узнать больше
					</button>
				</div>

				<div className={s.benefitsList}>
					<div className={s.listItem}>
						<img src={computer} alt="" />

						<div>
							Удобный заказ на сайте
						</div>
					</div>

					<div className={s.listItem}>
						<img src={city} alt="" />

						<div>
							Нет необходимости ехать в офис
						</div>
					</div>

					<div className={s.listItem}>
						<img src={globe} alt="" />

						<div>
							Огромный выбор направлений
						</div>
					</div>
			  </div>
      </div>
		</section>
  )
}

export default HowWorksBlock
