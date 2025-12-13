import React from 'react'

import s from './Main-content.module.scss'
import About from './About/About'
import HowWorksBlock from './How-works-block/How-works-block'
import ReviewsBlock from './Reviews-block/Reviews-block'

const MainContent = () => {
  return (
    <main className={s.mainContent}>
      <About />
      <HowWorksBlock />
      <ReviewsBlock />
    </main>
  )
}

export default MainContent
