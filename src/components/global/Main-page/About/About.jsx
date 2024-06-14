import React from 'react'
import s from './About.module.css'

const About = () => {
  return (
    <>
			<section className={s.about}>
        <h2 className={s.about__title}>
          о нас
        </h2>

        <div className={s.about__text}>
          <p className={s.about__text_p}>
            Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем 
            все больше людей заказывают жд билеты через интернет.
          </p>

          <p className={s.about__text_p}>
            Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? 
            Мы расскажем о преимуществах заказа через интернет.
          </p>
          
          <p className={`${s.about__text_p} + ${s.bold}`}>
            Покупать жд билеты дешево можно за 90 суток до отправления поезда. 
            Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
          </p>
        </div>
			</section>
    </>
  )
}

export default About
