import React from 'react'
import s from './How-works-block.module.scss'
import { ReactComponent as IconComputer } from '../../../../icons/computer.svg'
import { ReactComponent as IconCity } from'../../../../icons/city.svg'
import { ReactComponent as IconGlobe } from '../../../../icons/globe.svg'


const HowWorksBlock = () => {
  return (
    <section className={s.howWorksBlock} id='how-to-work'>
			<div className={s.wrapper}>
				<div className={s.head}>
					<h2 className={s.title}>Как это работает</h2>

					<button className={s.moreBtn}>
						Узнать больше
					</button>
				</div>

				<div className={s.benefitsList}>
					<div className={s.listItem}>
						<IconComputer />

						<div className={s.listItem__text}>
							Удобный заказ на сайте
						</div>
					</div>

					<div className={s.listItem}>
						<IconCity />

						<div className={s.listItem__text}>
							Нет необходимости ехать в офис
						</div>
					</div>

					<div className={s.listItem}>
						<IconGlobe />

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
