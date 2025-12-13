import React from 'react'

export const Timestamp = ({timestamp, duration, withoutMeasurement, onlyDate}) => {
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

  const res = ("" + (new Date(timestamp * 1000)).toISOString())
    .replace(/^([^T]+)T(.+)$/,'$1')
    .replace(/^(\d+)-(\d+)-(\d+)$/,'$3.$2.$1')

  return (
    <>
      {!duration && !withoutMeasurement && !onlyDate && time}

      {withoutMeasurement && <div>{`${hours}`}:{`${minutes}`}</div>}

      {duration && <div>{`${hours} ч.`}<br/>{`${minutes} мин.`}</div>}

      {!duration && !withoutMeasurement && onlyDate && <div>{res}</div>}
    </>
  )
}
