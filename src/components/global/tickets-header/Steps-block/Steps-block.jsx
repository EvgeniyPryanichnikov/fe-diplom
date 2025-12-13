import React from 'react'
import s from './Steps.block.module.scss'
import vector from '../../../../icons/vector.png'

const StepsBlock = () => {
  const steps = [
    {id: 1, text: 'Билеты', needArrow: true},
    {id: 2, text: 'Пассажиры', needArrow: true},
    {id: 3, text: 'Оплата', needArrow: true},
    {id: 4, text: 'Проверка', needArrow: false}
  ]
  return (
    <>
      <ul className={s.stepsContainer}>
        {steps.map(step => (
          <li
            className={s.step}
            key={step.id}
          >
            <div className={s.title}>
              <span className={s.number}>{step.id}</span>

              <p className={s.text}>{step.text}</p>   
            </div>

            {/* {step.needArrow &&
              <img
                className={s.vector}
                src={vector} alt="" 
              />
            } */}
          </li>
        ))}
      </ul>
    </>
  )
}

export default StepsBlock
