import React, {useEffect, useState} from 'react'
import  './Interactive-carriage-map.scss'
import {useDispatch, useSelector} from "react-redux";
import {CarriageTypesEnum, ClickableAreasMap} from "./constants/areas";
import {convertToPercentage} from "./utils/areas";
import {setSelectedSeatsFrom, setSelectedSeatsTo} from "../../../../../../store/slices/ticketsSlice";

function cn(base, mods = {}, adds = []) {
  return [
    base,
    ...adds.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, bool]) => !!bool)
      .map(([className]) => className),
  ].join(' ');
}

const Area = ({ area, isActive, isAvailable, handleClick, className }) => (
  <div
    className={cn('carriage-map__area', { available: isAvailable, active: isActive }, [className])}
    style={{
      top: `${area.y}%`,
      left: `${area.x}%`,
      width: `${area.width}%`,
      height: `${area.height}%`,
    }}
    onClick={handleClick && isAvailable !== undefined ? () => handleClick(area, isAvailable) : undefined}
  >
    {area.index}
  </div>
);
export const formatIndex = (index) => (index).toString().padStart(2, '0');

const InteractiveCarriageMap = ({coachNumber, isFrom, seats, coach, selectedSeats}) => {

  console.log(coach, seats)
  const persons__count_from = useSelector(state => state.tickets.persons__count_from)
  const persons__count_to = useSelector(state => state.tickets.persons__count_to)


  const maxPlacesToChoose = Object.values(isFrom ? persons__count_from : persons__count_to).reduce((a, v) => a + +v, 0);

  console.log(maxPlacesToChoose)
  let urlMap = "";

  switch (coach.class_type) {
    case 'first':
      urlMap = "/image/first-class-carriage.png";
      break;

    case 'second':
      urlMap = "/image/second-class-carriage.png";
      break;

    case 'third':
      urlMap = "/image/third-class-carriage.png";
      break;

    case 'fourth':
      urlMap = "/image/fourth-class-carriage.png";
      break;
  }

  console.log(ClickableAreasMap, coach.class_type)
  const areas = convertToPercentage(
    ClickableAreasMap[coach.class_type],
  )

  const dispatch = useDispatch();

  const handleClick = (area, available) => {
    const isClickOnSelected = selectedSeats.includes(area.index);

    console.log(area, available)
    if ((selectedSeats.length >= maxPlacesToChoose )&& !isClickOnSelected) {
      //TODO: show modal
      return;
    }
    if (available) return;

    if (area.index === 0 || typeof area.index !== 'number') {
      return;
    }


    if(isFrom) {
      dispatch(setSelectedSeatsFrom(area.index));
    } else {
      dispatch(setSelectedSeatsTo(area.index));
    }
  }

  return (
    <div className={'carriage-map'}>
      <img src={urlMap} alt='Carriage Map' />
      {areas.map(area => {
        if (area.index === 0) {
          area.index = formatIndex(coachNumber);

          return <Area area={area} key={area.index} className='area-carriage-number' />;
        }

        const areaData = seats.find(seat => seat.index === area.index);
        const isActive = selectedSeats.includes(area.index);
        const isAvailable = areaData && areaData.available;

        return <Area area={area} isActive={isActive} isAvailable={!isAvailable} handleClick={handleClick} key={area.index} />;
      })}
    </div>
  );
}

export default InteractiveCarriageMap
