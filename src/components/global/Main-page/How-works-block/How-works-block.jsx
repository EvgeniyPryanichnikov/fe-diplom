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
					<h2 className={s.title}>Как это работает</h2>

					<button className={s.moreBtn}>
						Узнать больше
					</button>
				</div>

				<div className={s.benefitsList}>
					<div className={s.listItem}>
						<img src={computer} alt="" />

						<div className={s.listItem__text}>
							Удобный заказ на сайте
						</div>
					</div>

					<div className={s.listItem}>
						<img src={city} alt="" />

						<div className={s.listItem__text}>
							Нет необходимости ехать в офис
						</div>
					</div>

					<div className={s.listItem}>
						<img src={globe} alt="" />

						<div className={s.listItem__text}>
							Огромный выбор направлений
						</div>
					</div>
			  </div>
      </div>
		</section>
  )
}

export default HowWorksBlock
