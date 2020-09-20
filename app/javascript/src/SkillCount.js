import React, { useState, useEffect } from 'react';

import { FiPlus } from 'react-icons/fi';
import { AiOutlineMinus } from 'react-icons/ai';

function SkillCount(props) {
  const [count, setCount] = useState(parseInt(props.count) || 0);
  const [highlight, setHighlight] = useState(false);

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

  return (
    <li className="behavior flex bg-gray-200">
      <div className="flex flex-grow py-1 px-2" onClick={() => setCount(c => c + 1)}>
        <span className="text-gray-700 pr-2 pt-1 flex-grow overflow-hidden" style={{maxWidth: "119px"}}>
          {props.name}
        </span>
        <span className={`behavior-count text-gray-500 ${highlight && 'highlight'} font-bold text-right pr-2 pt-1`} style={{maxWidth: "40px", width: "40px"}}>
          {count}
        </span>
      </div>

      <div className="flex">
        <button className="w-8 bg-gray-500 hover:bg-blue-700 text-white focus:outline-none py-1 px-2 mr-px" onClick={() => setCount(c => c + 1)}>
          <FiPlus />
        </button>
        <button className="w-8 bg-gray-500 hover:bg-blue-700 text-white focus:outline-none py-1 px-2 rounded-r" onClick={() => setCount(c => Math.max(c - 1, 0) )}>
          <AiOutlineMinus />
        </button>
      </div>
    </li>
  );
}

export default SkillCount;
