import React from 'react';

import { Link, useRouteMatch} from "react-router-dom";

function OptionsModal(props) {
  const handleNavigatePresentation = () => {
    props.setOptionsModal(false)
  }

  let { path, url } = useRouteMatch();

  return (
    <div className={`${props.visible ? "modal-active" : "opacity-0 pointer-events-none"} modal fixed w-full h-full top-0 left-0 flex items-center justify-center`}>
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

        <div className="modal-content py-4 text-center px-6 flex flex-col justify-between" style={{height: "20rem"}}>

          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Settings</p>
            <div className="modal-close cursor-pointer z-50" onClick={() => handleNavigatePresentation()}>
              <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-around w-full">
            <label htmlFor="toogleA" className="flex justify-between w-64 items-center cursor-pointer">
              <div className="relative">
                <input id="toogleA" type="checkbox" className="hidden" checked={props.showPointerHighlight} onChange={props.setPointerHighlight} />
                <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div className="toggle__dot absolute w-6 h-6 bg-gray-300 rounded-full shadow"></div>
              </div>
              <div className="w-full text-gray-700 font-medium">
                Highlight Clicks
              </div>
            </label>
          </div>

          <div className="flex items-center justify-around w-full">
            <label htmlFor="toogleB" className="flex justify-between w-64 items-center cursor-pointer">
              <div className="relative">
                <input id="toogleB" type="checkbox" className="hidden" checked={props.showTrackPrompt} onChange={props.setTrackPrompt} />
                <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div className="toggle__dot absolute w-6 h-6 bg-gray-300 rounded-full shadow"></div>
              </div>
              <div className="w-full text-gray-700 font-medium">
                Track Prompts
              </div>
            </label>
          </div>

          <div className="flex items-center justify-around w-full">
            <label htmlFor="toogleC" className="flex justify-between w-64 items-center cursor-pointer">
              <div className="relative">
                <input id="toogleC" type="checkbox" className="hidden" checked={props.showTherapist} onChange={props.setShowTherapist} />
                <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div className="toggle__dot absolute w-6 h-6 bg-gray-300 rounded-full shadow"></div>
              </div>
              <div className="w-full text-gray-700 font-medium">
                Show Therapist on Screen
              </div>
            </label>
          </div>

          <div className="flex justify-end pt-2">
            <div className="self-center mr-2 text-gray-500">
              <Link to={`${url}home/students/results`}>Results</Link>
            </div>
            <div className="self-center mr-2 text-gray-500">
              <Link to={`${url}home/students`}>Home</Link>
            </div>

            <button className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400" onClick={() => handleNavigatePresentation()}>
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OptionsModal;
