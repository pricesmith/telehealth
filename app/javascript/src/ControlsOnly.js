import React from 'react';

import Timer from './Timer';
import CallControls from './CallControls';
import Behaviors from './Behaviors';
import PresentationNav from './PresentationNav';

function ControlsOnly(props) {
  return (
    <div id="controls-only" className="h-full flex bg-gray-300">
      <div className="content-start text-left justify-between pt-2">
        <CallControls setOptionsModal={props.setOptionsModal}/>

        <Timer direction="up" label="Tantrum" />
        <Timer direction="down" label="Waiting" start="300" />
        <Timer direction="down" />

        <Behaviors />
      </div>

      <div className="content-start">
        <PresentationNav navigatePresentation={props.navigatePresentation} />
      </div>
    </div>
  );
}

export default ControlsOnly;
