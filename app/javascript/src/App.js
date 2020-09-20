import React, { useState } from 'react';
import './layout.css';

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Body from './Body';
import Home from './Home';
import ControlsOnly from './ControlsOnly';
import ControlsBottom from './ControlsBottom';
import PointerHighlight from './PointerHighlight';
import OptionsModal from './OptionsModal';

function App() {
  const [controls, setControls] = useState(true);
  const [card, setCard] = useState("tacting");
  const [optionsModalState, setOptionsModal] = useState();
  const [showPointerHighlight, setPointerHighlight] = useState(false);
  const [trackPrompt, setTrackPrompt] = useState(false);
  const [showTherapist, setShowTherapist] = useState(true);

  const cards = {
    tacting: {
      title: "tacting",
      facets: [
        {
          title: "tacting 1",
          image: "fish.jpg"
        }
      ]
    },
    listener_response: {
      title: "Which does not fit?",
      facets: [
        {image: "scissors.png"},
        {image: "meat.png"},
        {image: "butter.png"}
      ]
    },
    social_story: {
      title: "Movie Clip",
      facets: [
        {
          youtube: "mC4l9Wa7i2g?start=19",
        }
      ]
    },
    intra: {
      title: "Full Screen",
      facets: [
        {
          camera: "therapist",
        }
      ]
    },
    motor: {
      title: "Full Screen",
      facets: [
        {
          camera: "therapist",
        }
      ]
    },
    mand: {
      title: "Full Screen",
      facets: [
        {
          camera: "therapist",
        }
      ]
    },
    reinforce: {
      title: "Reinforce",
      facets: [
        {
          camera: "reinforce",
          youtube: "Lj7RfwV_V_k?start=202",
        }
      ]
    }
  }

  const handleControlsChange = (open=false) => {
    setControls(!controls);
    if(controls && open) window.open(document.URL.replace(/#\/.*$/, "") + "#/controls", '_blank', 'location=yes,height=520,width=690,scrollbars=no,status=yes');
  }

  const handleNavigatePresentation = (card) => {
    setCard(card);
  }

  const advancePresentation = () => {
    if(card === 'listener_response') {
      setCard('tacting')
    } else {
      setCard('listener_response')
    }
  }

  const handlePointerHighlight = (event) => {
    setPointerHighlight(event.target.checked);
  }

  const handleTrackPrompt = (event) => {
    setTrackPrompt(event.target.checked);
  }

  const handleShowTherapist = (event) => {
    setShowTherapist(event.target.checked);
  }

  return (
    <Router basename='/'>
      <Switch>
        <Route path="/home" component={Home} />

        <Route path="/controls">
          <div className={`h-full`} >
            <ControlsOnly
              setControls={handleControlsChange}
              setOptionsModal={setOptionsModal}
              navigatePresentation={handleNavigatePresentation}
            />
          </div>
        </Route>

        <Route>
          <div className={`h-full ${controls ? "" : "hide-control"}`} >
            { showPointerHighlight &&
              <PointerHighlight />
            }

            <Body
              controls={controls}
              setControls={handleControlsChange}
              card={cards[card]}
              setOptionsModal={setOptionsModal}
              navigatePresentation={handleNavigatePresentation}
              advancePresentation={advancePresentation}
              trackPrompt={trackPrompt}
              showTherapist={showTherapist}
              setShowTherapist={setShowTherapist}
              />

            { controls &&
              <ControlsBottom navigatePresentation={handleNavigatePresentation} cards={cards} card={card} />
            }

            <OptionsModal
              setOptionsModal={setOptionsModal}
              visible={optionsModalState}
              setPointerHighlight={handlePointerHighlight}
              showPointerHighlight={showPointerHighlight}
              setTrackPrompt={handleTrackPrompt}
              showTrackPrompt={trackPrompt}
              setShowTherapist={handleShowTherapist}
              showTherapist={showTherapist}
              />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
