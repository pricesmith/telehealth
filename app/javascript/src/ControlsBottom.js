import React from 'react';

import PresentationNav from './PresentationNav';

function ControlsBottom(props) {
  return (
    <div id="controls-bottom" className="bg-gray-300 flex justify-between">
      <div className="w-full" style={{marginLeft: '16rem'}}>
        <PresentationNav navigatePresentation={props.navigatePresentation} cards={props.cards} card={props.card} />
      </div>
    </div>
  );
}

export default ControlsBottom;
