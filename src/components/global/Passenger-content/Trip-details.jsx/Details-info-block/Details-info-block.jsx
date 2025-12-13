import { React, useState, useCallback } from 'react'
import s from './Details-info-block.module.scss'
import { Timestamp } from '../../../../common/Timestamp/Timestamp'
import { ReactComponent as IconPlus } from '../../../../../icons/plus.svg'
import { ReactComponent as IconMinus } from '../../../../../icons/minus.svg'
import DateTimeBlock from '../../../../common/Date-time-block/Date-time-block'

const DetailsInfoBlock = ({direction, icon, iconYellow, title}) => {
  const [isShowInfoBlock, setIsShowInfoBlock] = useState(true)
	const handleShowInfoBlock = useCallback(() => {
		setIsShowInfoBlock(prev => !prev)
  }, [])

  return (
    <div className={s.detailsInfoBlock}> 
      <div className={s.titleBlock}>
        <img className={s.arrowIcon} src={icon} alt="" />

        <p className={s.title}>{title}</p>

        <span className={s.date}><Timestamp className={s.time} timestamp={direction.from.datetime} onlyDate={true}/></span>

        <div 
          className={s.iconShow}
          onClick={handleShowInfoBlock}
        >
          {isShowInfoBlock ? <IconMinus className={s.icon}/> : <IconPlus className={s.icon} />}
        </div>
      </div>

      {isShowInfoBlock && 
        <div className={s.infoBlock}>
          <div className={s.train}>
            <span className={s.name}>№ Поезда</span>
            <span className={s.number}>{direction.train.name}</span>
          </div>

          <div className={s.train}>
            <span className={s.name}>Название</span>
            <span className={s.fromTo}>{direction.from.city.name.charAt(0).toUpperCase() + direction.from.city.name.slice(1)}<br/>{direction.to.city.name.charAt(0).toUpperCase() + direction.to.city.name.slice(1)}</span>
          </div>
         
          <DateTimeBlock direction={direction} icon={iconYellow}/>
        </div>
      }
    </div>
  )
}

export default DetailsInfoBlock
