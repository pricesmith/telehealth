import React from 'react';

import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiPhoneCall, FiPhoneForwarded} from 'react-icons/fi';

function CallControls(props) {
  return (
    <div className="bg-white p-2 px-0 shadow">
      <div className="text-3xl flex justify-between">
        <img alt="" src={process.env.PUBLIC_URL + '/kid1.png'} className="ml-1 w-10 h-10 rounded-full inline" />
        <h3 className="font-bold pl-2 inline">Jim Smith</h3>
        <BsThreeDotsVertical className="cursor-pointer inline text-right h-10 text-gray-500 " onClick={() => props.setOptionsModal(true)} />
      </div>
      <div className="text-2xl flex justify-around pt-1">
        <div className="inline-flex">
          <button className="bg-gray-400 hover:bg-gray-500 text-gray-200 font-bold py-2 px-4 rounded-l-lg">
            <FiPhoneForwarded />
          </button>
          <button className="bg-green-400 hover:bg-green-500 text-gray-200 font-bold py-2 px-4 rounded-r-lg">
            <FiPhoneCall />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CallControls;
