import React, { useState, useEffect } from 'react';

import DropdownSubmit from './DropdownSubmit';

function BehaviorAbc(props) {
  const [count, setCount] = useState(parseInt(props.count) || 0);
  const [highlight, setHighlight] = useState(false);
  const [detailsShow, setDetailsShow] = useState(false);
  const [detail, setDetail] = useState("");

  useEffect(() => {
    if(parseInt(props.count) !== count) setHighlight(true)
    let interval = null;

    interval = setInterval(() => {
      setHighlight(false);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [count, props.count]);

  function trackBehavior(event) {
    setCount(count + 1)
    setDetail("antecedent")
    setDetailsShow(true)
  }

  return (
    <li className="behavior flex flex-col bg-gray-200 rounded-r">
      <div className="flex">
        <div className="flex flex-grow py-1 px-2" onClick={trackBehavior}>
          <span className="text-gray-700 pr-2 pt-1 flex-grow overflow-hidden" style={{maxWidth: "119px"}}>
            {props.name}
          </span>
          <span className={`behavior-count text-gray-500 ${highlight && 'highlight'} font-bold text-right pr-2 pt-1`} style={{maxWidth: "40px", width: "40px"}}>
            {count}
          </span>
        </div>

        <div className="flex">
          <button className="bg-gray-500 hover:bg-blue-700 text-white focus:outline-none py-1 px-2 rounded-r" onClick={trackBehavior}>
            A-B-C
          </button>
        </div>
      </div>

      <div className={`rounded bg-white shadow-md py-1 px-2 ${!detailsShow && 'hidden'}`}>
        {
          detail === "antecedent" &&
          <DropdownSubmit placeholder="Antecedent" options={["Loud noise", "Sibling entered room", "Lights turned On"]} onSubmit={() => setDetail("consequence") } />
        }
        {
          detail === "consequence" &&
          <DropdownSubmit placeholder="Consequence" options={["Time out", "Reprimanded", "Ignored"]} onSubmit={() => setDetailsShow(false) && setDetail("") } />
        }
      </div>

    </li>
  );
}

export default BehaviorAbc;
