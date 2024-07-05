import React from 'react'

export const Timestamp = ({timestamp, duration, withoutMeasurement}) => {
  const hours = Math.floor(timestamp / 3600)
  const minutes = Math.floor((timestamp % 3600) / 60)

  const date = new Date(timestamp * 1000);

  let h = date.getHours()
  let m = date.getMinutes()

  if (h.length === 1)
    h = "0" + h;

  if (m.length === 1)
    m = "0" + m;

  const time = h + ':' + m;

  return (
    <>
      {!duration && !withoutMeasurement && time}

      {withoutMeasurement && <div>{`${hours}`}:{`${minutes}`}</div>}

      {duration && <div>{`${hours} ч.`}<br/>{`${minutes} мин.`}</div>}
    </>
  )
}
