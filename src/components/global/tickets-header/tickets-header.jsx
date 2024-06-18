import React from 'react'

import s from './Tickets-header.module.scss'
import Header from '../Header/Header'
import vector from '../../../icons/vector.png'
// import TravelForm from '../../common/Travel-form/Travel-form'

const TicketsHeader = () => {
  const steps = [
    {id: 1, text: 'Билеты', needArrow: true},
    {id: 2, text: 'Пассажиры', needArrow: true},
    {id: 3, text: 'Оплата', needArrow: true},
    {id: 4, text: 'Проверка', needArrow: false}
  ]
  return (
    <div className={s.ticketsHeader}>
      <Header />

      {/* <div>
        <TravelForm />
      </div> */}

      <div className={s.stepsContainer}>
        {steps.map(step => (
          <div
            className={s.step}
            key={step.id}
          >
            <div className={s.title}>
              <span className={s.number}>{step.id}</span>

              <p className={s.text}>{step.text}</p>   
            </div>

            {step.needArrow &&
              <img
                src={vector} alt="" 
              />
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default TicketsHeader
