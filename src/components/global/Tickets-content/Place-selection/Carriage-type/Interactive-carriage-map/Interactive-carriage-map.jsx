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

const InteractiveCarriageMap = ({coachNumber, isFrom}) => {

  const {coach, seats} = useSelector(state => state.tickets.coachsFromInfo?.selectedCoachInfo?.allSeats[0]); //TODO для обратного поезда не реализовано?
  
  console.log(coach, seats)

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

  const [activeAreaIndexes, setActiveAreaIndexes] = useState([]);
  const dispatch = useDispatch();

  const handleClick = (area, available) => {
    if (available) return;

    if (area.index === 0 || typeof area.index !== 'number') {
      return;
    }

    setActiveAreaIndexes(prevActiveAreaIndexes =>
      prevActiveAreaIndexes.includes(area.index)
        ? prevActiveAreaIndexes.filter(activeAreaIndex => activeAreaIndex !== area.index)
        : [...prevActiveAreaIndexes, area.index],
    );
  }

  useEffect(() => {
    if(isFrom) {
      dispatch(setSelectedSeatsFrom(activeAreaIndexes.map(index => +index)));
    } else {
      dispatch(setSelectedSeatsTo(activeAreaIndexes.map(index => +index)));
    }
  }, [dispatch, activeAreaIndexes]);

  return (
    <div className={'carriage-map'}>
      <img src={urlMap} alt='Carriage Map' />
      {areas.map(area => {
        if (area.index === 0) {
          area.index = formatIndex(coachNumber);

          return <Area area={area} key={area.index} className='area-carriage-number' />;
        }

        const areaData = seats.find(seat => seat.index === area.index);
        const isActive = activeAreaIndexes.includes(area.index);
        const isAvailable = areaData && areaData.available;

        return <Area area={area} isActive={isActive} isAvailable={!!isAvailable} handleClick={handleClick} key={area.index} />;
      })}
    </div>
  );
}

export default InteractiveCarriageMap
