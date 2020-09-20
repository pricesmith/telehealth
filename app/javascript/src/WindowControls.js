import React from 'react';

import { BsBoxArrowUpLeft, BsChevronDoubleLeft } from 'react-icons/bs';

function WindowControls(props) {
  return (
    <div className="text-2xl flex justify-between px-2 py-3">
      <button onClick={() => props.setControls(true)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded shadow">
        <BsBoxArrowUpLeft />
      </button>
      <button onClick={() => props.setControls()} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded shadow">
        <BsChevronDoubleLeft />
      </button>
    </div>

  )
}

export default WindowControls;
