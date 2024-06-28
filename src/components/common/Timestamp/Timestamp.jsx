import React from 'react'

export const Timestamp = ({timestamp}) => {
  const hours = Math.floor(timestamp / 3600)
  const minutes = Math.floor((timestamp % 3600) / 60)

  // let date = new Intl.DateTimeFormat("en-US", {
  //   hour: "2-digit",
  //   minute: "2-digit",
  // }).format(timestamp);

  return (
    <>
     {hours} : {minutes}
     {/* {date} */}
    </>
  )
}
