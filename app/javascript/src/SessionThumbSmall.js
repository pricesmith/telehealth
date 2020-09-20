import React from 'react';
import { useHistory } from "react-router-dom";

function SessionThumbSmall(props) {
  let history = useHistory()

  return (
    <div draggable className="w-32 flex-shrink-0 flex flex-col border p-3 mr-4 mb-4 select-none " onClick={() => history.push('/home/students/results')}>
      <div className="flex justify-between">

        <img className="h-12" src={process.env.PUBLIC_URL + '/' + props.image} alt="" style={{maxWidth: '8rem'}}/>

      </div>

      <span className='text-sm capitalize mt-2'>
        {props.title}
      </span>
    </div>
  );
}

export default SessionThumbSmall;
