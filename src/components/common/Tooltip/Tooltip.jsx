import{ React, useState, useRef} from 'react'
import s from './Tooltip.module.scss'

const Tooltip = ({children, text}) => {
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

  return (
    <div className={s.container} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      {children}
      {showToolTip && <div className={s.tooltip}>{text}</div>}
    </div>
  )
}

export default Tooltip
