import React from 'react';
import * as moment from 'moment'

import { BsThreeDotsVertical } from 'react-icons/bs';

function SessionThumb(props) {
  return (
    <div className="flex flex-col">
      <span className="font-semibold">
        {moment(new Date()).add(props.days,'days').format('M/D/YY')}
      </span>
      <div id="" className="w-full h-full md:w-56 flex flex-col flex-wrap border p-3 pr-1 select-none">
        <div className="flex justify-between">
          <img className="h-24 pr-2" src={process.env.PUBLIC_URL + '/' + props.image} alt="" style={{maxWidth: '8rem'}}/>

          <div className="flex w-full justify-end">
            <BsThreeDotsVertical className='text-xl' />
          </div>
        </div>

        <span className='text-lg capitalize font-semibold mt-2'>
          {props.title}
        </span>
        <span className=''>
          {props.subTitle}
        </span>
      </div>
    </div>
  );
}

export default SessionThumb;
