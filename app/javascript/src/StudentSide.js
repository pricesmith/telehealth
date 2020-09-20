import React, { useState } from 'react';

import DeckItem from './DeckItem';

import { BsChevronRight, BsChevronDown } from 'react-icons/bs';

function StudentSide(props) {
  const [maintenance, setMaintenance] = useState(false);
  const [baselined, setBaselined] = useState(false);
  const [planned, setPlanned] = useState(false);

  return (
    <div className="flex flex-col mt-4 select-none">
      <div className="text-2xl mb-4">
        Decks
      </div>

      <div className="w-full mb-4 p-2 bg-white rounded-lg">
        <div className="text-lg flex items-center justify-between" onClick={() => setMaintenance(!maintenance)}>
          <span>Maintenance</span>
          { maintenance ? <BsChevronDown /> : <BsChevronRight />}
        </div>

        { maintenance &&
          <ul className={`mt-2 list-reset flex flex-col text-left space-y-1`} >
            <DeckItem title='Prepositions: Where is the Cat?' image='prep-cat.png' tag="3 runs" tagColor="text-gray-600" />
          </ul>
        }
      </div>

      <div className="w-full mb-4 p-2 bg-white rounded-lg">
        <div className="text-lg flex items-center justify-between" onClick={() => setBaselined(!baselined)}>
          <span>Baselined</span>
          { baselined ? <BsChevronDown /> : <BsChevronRight />}
        </div>

        { baselined &&
          <ul className={`mt-2 list-reset flex flex-col text-left space-y-1`} >
            <DeckItem title='Big Deal Little Deal ' image='big-deal.png' />
            <DeckItem title='Everyone Makes Mistakes: Social Story' image='everyone-social.png' />
          </ul>
        }
      </div>

      <div className="w-full p-2 bg-white rounded-lg">
        <div className="text-lg flex items-center justify-between" onClick={() => setPlanned(!planned)}>
          <span>Planned (2)</span>
          { planned ? <BsChevronDown /> : <BsChevronRight />}
        </div>

        { planned &&
          <ul className={`mt-2 list-reset flex flex-col text-left space-y-1`} >
            <DeckItem title='On Topic or Off Topic' image='on-topic-or.png' tag="new" border="border-green-300"/>
            <DeckItem title='Social Emotional Learning' image='soc-emo.png' tag="new" border="border-green-300"/>
            <DeckItem title='Everyone Makes Mistakes: ...' image='everyone-social.png' />
            <DeckItem title='Expected vs Unexpected' image='expected-unexpected.png' />
          </ul>
        }
      </div>

    </div>
  );
}

export default StudentSide;
