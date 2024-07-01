import { React, useState, useCallback } from 'react'
import s from './Details-info-block.module.scss'
import { ReactComponent as IconPlus } from '../../../../../icons/plus.svg'
import { ReactComponent as IconMinus } from '../../../../../icons/minus.svg'

const DetailsInfoBlock = ({icon, title,  labelLeft, labelRight}) => {
  const [isShowInfoBlock, setIsShowInfoBlock] = useState(false)
	const handleShowInfoBlock = useCallback(() => {
		setIsShowInfoBlock(prev => !prev)
  }, [])

  return (
    <div className={s.detailsInfoBlock}> 
      <div className={s.titleBlock}>
        <img className={s.arrowIcon} src={icon} alt="" />

        <p className={s.title}>{title}</p>

        <span className={s.date}>01.07.2024</span>

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
            <span className={s.number}>116С</span>
          </div>

          <div className={s.train}>
            <span className={s.name}>Название</span>
            <span className={s.fromTo}>Самара</span>
          </div>

          <div className={s.row}>
            <span className={s.labelRight}>
             {labelRight}  
            </span>
          </div>
        </div>
      }
    </div>
  )
}

export default DetailsInfoBlock
