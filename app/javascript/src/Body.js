import React from "react";
import Presentation from "./Presentation";
import ControlsLeft from "./ControlsLeft";

function Body(props) {
  console.log("Body props: ", props);

  return (
    <div id="center-wrapper" className="flex flex-row">
      {props.controls && (
        <ControlsLeft
          setControls={props.setControls}
          setOptionsModal={props.setOptionsModal}
        />
      )}
      <Presentation
        setControls={props.setControls}
        navigatePresentation={props.navigatePresentation}
        advancePresentation={props.advancePresentation}
        trackPrompt={props.trackPrompt}
        showTherapist={props.showTherapist}
        setShowTherapist={props.setShowTherapist}
        card={props.card}
      />
    </div>
  );
}

export default Body;
