import React, { useState, useEffect } from 'react';

import { FiRefreshCw } from 'react-icons/fi';

function BehaviorDuration(props) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    }
  }, [isActive, seconds]);

  function zeroPad(n) {
      return (n < 10) ? '0' + n : '' + n;
  }

  function clockDisplayOfSeconds(secondsCount, hours=false) {
    const hourString = hours ? '00:' : ''
    return hourString + zeroPad(Math.floor(secondsCount/60)) + ':' + zeroPad(secondsCount%60)
  }

  return (
    <li className="behavior flex bg-gray-200 rounded-r">
      <div className="flex flex-grow py-1 px-2" onClick={toggle}>
        <span className="text-gray-700 pr-2 pt-1 flex-grow">
          {props.name}
        </span>
      </div>

      <div className="flex">
        <div className={`flex items-center flex-grow mr-px ${isActive ? 'active bg-gray-900' : 'bg-gray-700'}`}>
          <div className="time cursor-pointer px-2" onClick={toggle}>
            <span>{clockDisplayOfSeconds(seconds)}</span>
          </div>
        </div>
        <button className="w-8 bg-gray-500 hover:bg-blue-700 text-white focus:outline-none py-1 px-2 rounded-r" onClick={reset}>
          <FiRefreshCw />
        </button>
      </div>
    </li>
  );
}

export default BehaviorDuration;
