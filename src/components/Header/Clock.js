import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Clock = () => {
  const initialState = {
    time: '00:00',
    date: '01 de Ene Lun.',
  };

  const [state, setState] = useState(initialState);

  function toCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function setTimeInHTML() {
    const currentTime = moment().locale('es').format('HH:mm');
    const currentYear = moment().locale('es').format('MMMM');
    const currentDay = moment().locale('es').format('D');
    const currentDayName = moment().locale('es').format('ddd');

    setState({
      ...state,
      time: `${currentTime}`,
      date: `${currentDay} de ${toCapitalize(currentYear)} ${toCapitalize(
        currentDayName
      )}`,
    });
  }

  useEffect(() => {
    setTimeInHTML();
    const intervalFunc = setInterval(setTimeInHTML, 1000);
    return () => {
      clearInterval(intervalFunc);
    };
  }, []);

  return (
    <div className="clock">
      <div className="flex flex-col justify-center items-center">
        <p id="time" className="time font-bold text-xl">
          {state.time}
        </p>
        <hr className="border-2 mb-1 border-solid border-black w-full rounded-full" />
        <p id="date" className="date font-bold text-sm">
          {state.date}
        </p>
      </div>
    </div>
  );
};

export default Clock;
