import { React, useState, useCallback } from 'react'
import s from './Direction-block.module.scss'
import plusIcon from '../../../icons/plus.svg'
import minusIcon from '../../../icons/minus.svg'

const DirectionBlock = ({icon, title,  labelLeft, labelRight}) => {
  const [isShowTimeBlock, setIsShowTimeBlock] = useState(false);
	const handleShowTimeBlock = useCallback(() => {
		setIsShowTimeBlock(prev => !prev);
  }, []);

  return (
    <div className={s.directionBlock}> 
      <div className={s.titleBlock}>
        <img className={s.arrowIcon} src={icon} alt="" />

        <p className={s.title}>{title}</p>

        <div>
          <img className={s.iconShow} src={isShowTimeBlock ? minusIcon : plusIcon} onClick={handleShowTimeBlock} alt="" />
        </div>
      </div>

      {isShowTimeBlock && 
        <div className={s.transitTimeBlock}>
          <div className={s.row}>
            <span className={s.labelLeft}>
              {labelLeft}  
            </span>
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

export default DirectionBlock
