import React, { useState, useEffect, useCallback, createRef } from 'react';
import TimePicker from 'react-time-picker';

import { BsChevronBarDown, BsChevronDoubleUp, BsThreeDotsVertical } from 'react-icons/bs';
import { FiRefreshCw } from 'react-icons/fi';

function Timer(props) {
  const [countUp, setCountUp] = useState(props.direction === "up");
  const [label, setLabel] = useState(props.label);
  const [editTime, setEditTime] = useState();
  const [countStart, setCountStart] = useState(props.start || 0);

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const domRef = createRef()

  function toggle() {
    if(isActive) {
      setIsActive(false);
    } else {
      setEditTime(false)
      canCount(seconds) && setIsActive(true)
    }
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  function edit() {
    setEditTime(!editTime);
    setIsActive(false);
  }

  const isExpired = useCallback((currentSeconds) => {
    return !countUp && (countStart > 0) && (currentSeconds >= countStart)
  }, [countUp, countStart]);

  function canCount(currentSeconds) {
    if ( countUp ) {
      return true
    } else {
      return ((countStart > 0) && (currentSeconds < countStart))
    }
  }

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        if(isExpired(seconds + 1)) {
          setIsActive(false)
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    }
  }, [isActive, seconds, isExpired]);

  function zeroPad(n) {
      return (n < 10) ? '0' + n : '' + n;
  }

  function toggleDirection() {
    setCountUp(!countUp)
    setSeconds(0)
  }

  function labelChange(event) {
    setLabel(event.target.value);
  }

  function countStartChanged() {
    const minutes = domRef.current && domRef.current.getElementsByClassName("react-time-picker__inputGroup__minute")[0]
    const seconds = domRef.current && domRef.current.getElementsByClassName("react-time-picker__inputGroup__second")[0]

    setSeconds(0)
    if(seconds && minutes && seconds.value && minutes.value) {
      setCountStart((minutes.value * 60) + parseInt(seconds.value));
    }
  }

  function clockDisplayOfSeconds(secondsCount, hours=false) {
    const hourString = hours ? '00:' : ''
    return hourString + zeroPad(Math.floor(secondsCount/60)) + ':' + zeroPad(secondsCount%60)
  }

  return (
    <div ref={domRef} className={`timer ${editTime && "editing"} p-2 flex flex-row`}>
      <div className="label flex items-center border-b-2 border-gray-500">
        <div className="-mb-3 bg-gray-300 btn flex items-center cursor-pointer text-sm text-gray-600" onClick={edit}>
          <BsThreeDotsVertical />
        </div>
        {countUp &&
          <div className={`btn ${editTime && "bg-blue-400 px-1"} text-blue-700 cursor-pointer flex items-center pr-1 text-sm`} onClick={() => editTime && toggleDirection()}>
            <BsChevronDoubleUp className="" />
          </div>
        }
        {!countUp &&
          <div className={`btn ${editTime && "bg-blue-400 px-1"} text-blue-700 cursor-pointer flex items-center pr-1`} onClick={() => editTime && toggleDirection()}>
            <BsChevronBarDown className="" />
          </div>
        }

        {!editTime &&
          <input
            className="appearance-none bg-transparent w-full text-gray-700 py-1 leading-tight focus:outline-none"
            type="text"
            placeholder="Timer"
            value={label}
            onChange={labelChange}
            />
          }
        <div className="modify flex">
          <button className="btn bg-gray-500 hover:bg-blue-700 text-white focus:outline-none px-1 mr-px" onClick={reset}>
            <FiRefreshCw />
          </button>
        </div>
      </div>
      {editTime &&
        <TimePicker
          onClockClose={countStartChanged}
          value={clockDisplayOfSeconds(countStart, true)}
          format={"mm:ss"}
          disabled={countUp}
          disableClock={true}
          clearIcon={null}
        />
      }

      <div className={`flex items-center flex-grow
        ${isActive ? 'active bg-gray-900' : 'bg-gray-700'}
        ${isExpired(seconds) && 'expired bg-red-500'}`}>
        <div className="time cursor-pointer px-2" onClick={toggle}>
          {countUp &&
            <span>{clockDisplayOfSeconds(seconds)}</span>
          }
          {!countUp &&
            <span>{clockDisplayOfSeconds(countStart - seconds)}</span>
          }
        </div>
      </div>
    </div>
  );
}

export default Timer;
