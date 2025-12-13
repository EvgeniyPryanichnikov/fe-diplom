import {React, useState, useRef} from 'react'
import s from './Tooltip.module.scss'

const Tooltip = ({children, text, disabled, isActive, handleClick}) => {
  const refSetTimeout = useRef();
  const [showToolTip, setShowToolTip] = useState(false);

  const onMouseEnterHandler = () => {
    refSetTimeout.current = setTimeout(() => {
      setShowToolTip(true);
    }, 250);
  }


  const onMouseLeaveHandler = () => {
    clearTimeout(refSetTimeout.current);
    setShowToolTip(false);
  }

  function handleClickButton(e) {
    if (!disabled)
      handleClick();
  }

  const cls = `${s.container} ${disabled ? s.disabled : ''} ${isActive ? s.active : ''}`

  return (
    <div className={cls} onClick={handleClickButton} onMouseEnter={onMouseEnterHandler}
         onMouseLeave={onMouseLeaveHandler}>

      {children}
      {showToolTip && <div className={s.tooltip} onClick={e => e.stopPropagation()}>{text}</div>}
    </div>
  )
}

export default Tooltip
