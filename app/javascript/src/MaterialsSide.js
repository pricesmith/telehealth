import React, { useState } from 'react';

import ClientItem from './ClientItem';

import { BsChevronRight, BsChevronDown } from 'react-icons/bs';

function MaterialsSide(props) {
  const [clients, setClients] = useState(true);

  return (
    <div className="flex flex-col mt-4 select-none">
      <div className="w-full mb-4 p-2 bg-white rounded-lg">
        <div className="text-lg flex items-center justify-between" onClick={() => setClients(!clients)}>
          <span>Clients</span>
          { clients ? <BsChevronDown /> : <BsChevronRight />}
        </div>

        { clients &&
          <ul className={`mt-2 list-reset flex flex-col text-left space-y-3`} >
            <ClientItem name="Kingston Phillips" sessions="2 sessions scheduled" decks="7 decks assigned"/>
            <ClientItem name="Emmalyn Allison" sessions="1 session scheduled" decks="4 decks assigned"/>
            <ClientItem name="Robin Reilly" sessions="12 sessions scheduled" decks="22 decks assigned"/>
          </ul>
        }
      </div>
    </div>
  );
}

export default MaterialsSide;
