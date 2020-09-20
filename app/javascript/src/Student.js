import React from 'react';

import SessionThumb from './SessionThumb';
import SessionThumbSmall from './SessionThumbSmall';

import { BsChevronCompactRight } from 'react-icons/bs';

function Student(props) {
  return (
    <div id="" className="">
      <div className="flex capitalize text-3xl">
        <span className="font-semibold">Kingston Phillips</span>
        <span className="ml-2">Level II</span>
      </div>
      <span className="text-sm">
        Yelling, Aggression, Pica
      </span>


      <div className="flex-col">
        <div className="mr-6 w-full mt-8 py-2 flex-shrink-0 flex bg-white rounded-lg">
          <h3 className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold capitalize ">
            <span>past (12)</span>
          </h3>

          <div className="flex px-4">
            <SessionThumbSmall title='Infer by Asso...' image='infer-by-assoc.png' />
            <SessionThumbSmall title='VB-MAP Level II' image='vb-title.png' />
            <SessionThumbSmall title='Infer by Asso...' image='infer-by-assoc2.png' />
            <div className="flex items-center pt-1 pb-1 hover:text-teal-700">
              <BsChevronCompactRight className='text-4xl' />
            </div>
          </div>
        </div>

        <div className="mr-6 w-full mt-8 p-2 flex-shrink-0 flex flex-col bg-white rounded-lg">
          <h3 className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold capitalize ">
            <span>scheduled</span>
          </h3>

          <div className="flex space-x-4 pt-1 pb-1 px-8">

            <SessionThumb title='on topic or off topic?' subTitle='Social skills, Articulation' days={5} image='on-topic.png' />
            <SessionThumb title='Expected vs unexpected' subTitle='Echoic, Social skills' days={9} image='expected.png' />

          </div>
        </div>
      </div>

    </div>
  );
}

export default Student;
