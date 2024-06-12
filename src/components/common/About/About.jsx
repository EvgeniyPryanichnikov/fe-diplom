import React from 'react'
import style from './About.module.css'

export const About = () => {
  return (
    <>
			<section className={style.about}>
        <h2 className={style.about__title}>
          о нас
        </h2>

        <div className={style.about__text}>
          <p className={style.about__text_p}>
            Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем 
            все больше людей заказывают жд билеты через интернет.
          </p>

          <p className={style.about__text_p}>
            Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? 
            Мы расскажем о преимуществах заказа через интернет.
          </p>
          
          <p className={`${style.about__text_p} + ${style.bold}`}>
            Покупать жд билеты дешево можно за 90 суток до отправления поезда. 
            Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
          </p>
        </div>
			</section>
    </>
  )
}
