import React from 'react';

import Timer from './Timer';
import CallControls from './CallControls';
import WindowControls from './WindowControls';
import Behaviors from './Behaviors';

function ControlsLeft(props) {
  return (
    <div id="controls-left" className="h-full w-64 bg-gray-300">
      <div className="w-64 content-start text-left justify-between">

        <CallControls setOptionsModal={props.setOptionsModal}/>
        <WindowControls setControls={props.setControls} />

        <Timer direction="up" label="Tantrum" />
        <Timer direction="down" label="Waiting" start="300" />
        <Timer direction="up" />

        <Behaviors />
      </div>
    </div>
  );
}

export default ControlsLeft;
