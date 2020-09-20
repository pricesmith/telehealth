import React from 'react';

import SessionThumbSmall from './SessionThumbSmall';
import { BsChevronCompactRight } from 'react-icons/bs';

function Materials(props) {

  return (
    <div id="" className="">
      <div className="flex flex-col capitalize text-3xl">
        <span className="font-semibold">Materials</span>
      </div>

      <div className="flex-col">
        <div className="w-full mt-8 py-2 flex-shrink-0 flex bg-white rounded-lg">
          <h3 className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold capitalize ">
            <span>recent</span>
          </h3>

          <div className="flex px-4">
            <SessionThumbSmall title='Infer by Asso...' subTitle='Social skills, Articulation' days={5} image='infer-by-assoc.png' />
            <SessionThumbSmall title='2: Infer by As...' subTitle='Social skills, Articulation' days={5} image='infer-by-assoc2.png' />
            <div className="flex items-center pt-1 pb-1 hover:text-teal-700">
              <BsChevronCompactRight className='text-4xl' />
            </div>
          </div>
        </div>

        <div className="w-full mt-8 py-2 flex-shrink-0 flex flex-col bg-white rounded-lg">
          <h3 className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold capitalize ">
            <span>saved</span>
          </h3>

          <div className="flex flex-wrap px-4">
            <SessionThumbSmall title='Big Deal Little Deal ' image='big-deal.png' />
            <SessionThumbSmall title='On Topic or Off Topic' image='on-topic-or.png' />
            <SessionThumbSmall title='Expected vs Unexpected' image='expected-unexpected.png' />
            <SessionThumbSmall title='Everyone Makes Mistakes: Social Story' image='everyone-social.png' />
            <SessionThumbSmall title='Prepositions: Where is the Cat?' image='prep-cat.png' />
            <SessionThumbSmall title='Unexpected Behaviors Size of the Problem' image='unexpected-problem.png' />
            <SessionThumbSmall title='Social Emotional Learning - Unexpected Behaviors' image='soc-emo.png' />
            <SessionThumbSmall title='Student Check In' image='stu-check-in.png' />
          </div>
        </div>

        <div className="flex w-full mt-8">
          <div className="mr-6 py-2 w-1/3 flex flex-col bg-white rounded-lg">
            <h3 className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold capitalize ">
              <span>Social Stories</span>
            </h3>

            <div className="flex flex-wrap px-4">
              <SessionThumbSmall title='Story Comprehension with questions' image='story-comp.png' />
            </div>
          </div>

          <div className="mr-6 py-2 w-1/3 flex flex-col bg-white rounded-lg">
            <h3 className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold capitalize ">
              <span>decks</span>
            </h3>

            <div className="flex flex-wrap px-4">
              <SessionThumbSmall title='Expected / Unexpected Behavior During Virtual Learning' image='expected-unexpected-virtual.png' />
            </div>
          </div>

          <div className="py-2 w-1/3 flex flex-col bg-white rounded-lg">
            <h3 className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold capitalize ">
              <span>new</span>
            </h3>

            <div className="flex flex-wrap px-4">
              <SessionThumbSmall title='My Breathing Book - Feathers' image='unexpected-problem.png' />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Materials;
