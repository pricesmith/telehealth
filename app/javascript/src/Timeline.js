import React from 'react';
import * as moment from 'moment'

import { BsX } from 'react-icons/bs';

function Timeline(props) {

  return (
    <div className="flex flex-col text-sm mb-2">
      <div className="flex flex-col border border-gray-400 bg-white">

        {props.data.map( (item, index) => {
            return (
              <div key={index} className={`flex ${(props.data.length - 1 === index) ? '' : 'border-b-2 border-gray-400'} ${index % 2 === 1 && 'bg-gray-200'}`}>
                <div className="border-r-2 border-gray-400 p-2 text-right" style={{width: "30%"}}>
                  {item.item} ({item.events.length})
                </div>

                <div className="flex w-full relative">
                  <div className="w-full h-full absolute">
                    <div className="relative flex items-center overflow-hidden" style={{height: '60%', top: '20%'}}>

                      {item.events.map( (eventTime, index) => {
                        if (eventTime instanceof(Array)) {
                          let left = eventTime[0] / props.duration
                          let right = eventTime[1] / props.duration
                          return (
                            <div
                              key={index}
                              className="absolute bg-green-300 h-full"
                              style={{
                                left: 'calc(100% * ' + left + ' )',
                                right: 'calc(100% - 100% * ' + right + ')',
                                minWidth: '20px'
                              }}
                            >
                            </div>
                          )
                        } else {
                          let position = eventTime / props.duration
                          return ( <BsX key={index} className="text-2xl absolute" style={{left: 'calc(100% * ' + position + ')'}} /> )
                        }
                      }) }

                    </div>
                  </div>

                  <div className="border-r-2 border-gray-400" style={{width: "calc(100%/6)"}}>
                  </div>
                  <div className="border-r-2 border-gray-400" style={{width: "calc(100%/6)"}}>
                  </div>
                  <div className="border-r-2 border-gray-400" style={{width: "calc(100%/6)"}}>
                  </div>
                  <div className="border-r-2 border-gray-400" style={{width: "calc(100%/6)"}}>
                  </div>
                  <div className="border-r-2 border-gray-400" style={{width: "calc(100%/6)"}}>
                  </div>
                </div>
              </div>
            )
        })}

      </div>

      <div className="text-xs flex pt-1">
        <div className="" style={{width: "30%"}}>
          &nbsp;
        </div>

        <div className="w-full flex relative">
          <div className="font-bold absolute" style={{left: '-4%'}}>
            {moment(props.start).format('h:mm A')}
          </div>
          <div className="absolute" style={{left: 'calc(100% * ' + 1/6 + ' - 2%)'}}>
            {moment(props.start).add("10", "minutes").format(':mm')}
          </div>
          <div className="absolute" style={{left: 'calc(100% * ' + 2/6 + ' - 2%)'}}>
            {moment(props.start).add("20", "minutes").format(':mm')}
          </div>
          <div className="absolute" style={{left: 'calc(100% * ' + 3/6 + ' - 2%)'}}>
            {moment(props.start).add("30", "minutes").format(':mm')}
          </div>
          <div className="absolute" style={{left: 'calc(100% * ' + 4/6 + ' - 2%)'}}>
            {moment(props.start).add("40", "minutes").format(':mm')}
          </div>
          <div className="absolute" style={{left: 'calc(100% * ' + 5/6 + ' - 2%)'}}>
            {moment(props.start).add("50", "minutes").format(':mm')}
          </div>
          <div className="font-bold absolute" style={{right: 0}}>
            {moment(props.start).add("60", "minutes").format('h:mm')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
