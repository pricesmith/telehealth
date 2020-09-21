/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsChevronDoubleRight } from "react-icons/bs";
import { MdClose, MdCheck } from "react-icons/md";

function Presentation(props) {
  const [myWay, setMyWay] = useState(false);
  const [breakTime, setBreakTime] = useState(false);
  const [token, setToken] = useState("🍕");
  const [tokenCount, setTokenCount] = useState(2);
  const [showTrackPrompt, setShowTrackPrompt] = useState(false);
  const [promptDelay, setPromptDelay] = useState("");
  const [promptType, setPromptType] = useState("");

  const checkMode = () => {
    const facet = props.card.facets ? props.card.facets[0] : {};
    if (facet && facet.camera === "therapist") {
      return "therapist";
    } else if (facet && facet.camera === "reinforce") {
      return "reinforce";
    } else {
      return "cards";
    }
  };
  const therapistScreen = checkMode() === "therapist";
  const cardsScreen = checkMode() === "cards";
  const reinforceScreen = checkMode() === "reinforce";

  const handleTokenSelect = (event) => {
    setToken(event.target.value);
  };

  const handleTokenClick = (index) => {
    if (tokenCount >= index) {
      setTokenCount(tokenCount - 1);
    } else {
      setTokenCount(tokenCount + 1);
    }
  };

  const clearTokens = () => {
    props.navigatePresentation("reinforce");
    setTokenCount(0);
  };

  const recordResponse = () => {
    if (props.trackPrompt) {
      setShowTrackPrompt(true);
    } else {
      props.advancePresentation();
    }
  };

  const hideTrackPrompt = () => {
    setShowTrackPrompt(false);
    setPromptDelay("");
    setPromptType("");
    props.advancePresentation();
  };

  return (
    <div
      id="presentation"
      className="main-content flex-1 overflow-y-auto border-4 border-black select-none"
    >
      <div
        className={`h-full flex ${
          therapistScreen ? "therapist-full-screen" : ""
        }`}
      >
        {reinforceScreen && props.card.facets[0].youtube && (
          <iframe
            title="facet-youtube"
            src={
              "https://www.youtube.com/embed/" + props.card.facets[0].youtube
            }
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "relative",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        )}

        {!reinforceScreen && (
          <div
            className="h-full flex flex-col"
            style={{ width: "28%", maxWidth: "28%" }}
          >
            <div className="flex-grow">
              <div
                className={`card bg-partial-white cursor-pointer ${
                  myWay ? "border-red-300" : "border-green-300"
                }`}
                onClick={() => setMyWay(!myWay)}
              >
                {!myWay ? "My Way" : "Our Way"}
              </div>
              <div
                className="card bg-partial-white cursor-pointer border-grey-300"
                onClick={() => setBreakTime(!breakTime)}
              >
                <img
                  alt=""
                  src={process.env.PUBLIC_URL + "/break.png"}
                  className="mr-2"
                  style={{ width: "40%" }}
                />
                {!breakTime ? "I Need A Break" : "Break Time"}
              </div>
            </div>

            {cardsScreen && props.showTherapist && (
              <div className="relative">
                <div
                  className="toggle-controls absolute border-2 border-gray-300 border-l-0"
                  onClick={() => props.setControls()}
                  style={{ left: "0%", top: "0%" }}
                >
                  <BsChevronDoubleRight className="bg-gray-200 h-10 text-gray-500 hover:text-black text-2xl" />
                </div>
                <AiOutlineCloseCircle
                  className="absolute bg-white text-gray-500 hover:text-black text-4xl rounded-full"
                  style={{ right: "10%", top: "10%" }}
                  onClick={() => props.setShowTherapist(false)}
                />

                <img
                  alt=""
                  src={process.env.PUBLIC_URL + "/therapist.png"}
                  className="m-4 rounded-full inline"
                  style={{ width: "80%" }}
                />
              </div>
            )}
          </div>
        )}

        {!reinforceScreen && (
          <div className="flex flex-col w-full">
            <div className="absolute self-center">
              <div className="bg-partial-white rounded-b-lg shadow-md">
                {!showTrackPrompt && (
                  <div className="flex">
                    <MdCheck
                      className="text-gray-500 hover:text-green-500 text-5xl rounded-bl-lg"
                      onClick={() => recordResponse()}
                    />
                    <MdClose
                      className="text-gray-500 hover:text-red-500 text-5xl rounded-br-lg"
                      onClick={() => recordResponse()}
                    />
                  </div>
                )}
                {showTrackPrompt && (
                  <div className="flex items-stretch">
                    <div className="flex flex-col p-3">
                      <div className="flex justify-between mb-2">
                        <div className="mr-2 text-sm">Delay:</div>

                        <div className="inline-flex text-xs font-bold text-gray-800 cursor-pointer">
                          <div
                            className={`bg-gray-300 hover:bg-gray-400 py-1 px-2 rounded-l ${
                              promptDelay === "1" &&
                              "bg-green-400 hover:bg-green-400"
                            }`}
                            onClick={() => setPromptDelay("1")}
                          >
                            1s
                          </div>
                          <div
                            className={`bg-gray-300 hover:bg-gray-400 py-1 px-2 ${
                              promptDelay === "2" &&
                              "bg-green-400 hover:bg-green-400"
                            }`}
                            onClick={() => setPromptDelay("2")}
                          >
                            2s
                          </div>
                          <div
                            className={`bg-gray-300 hover:bg-gray-400 py-1 px-2 ${
                              promptDelay === "3" &&
                              "bg-green-400 hover:bg-green-400"
                            }`}
                            onClick={() => setPromptDelay("3")}
                          >
                            3s
                          </div>
                          <div
                            className={`bg-gray-300 hover:bg-gray-400 py-1 px-2 ${
                              promptDelay === "5" &&
                              "bg-green-400 hover:bg-green-400"
                            }`}
                            onClick={() => setPromptDelay("5")}
                          >
                            5s
                          </div>
                          <div
                            className={`bg-gray-300 hover:bg-gray-400 py-1 px-2 ${
                              promptDelay === "7" &&
                              "bg-green-400 hover:bg-green-400"
                            }`}
                            onClick={() => setPromptDelay("7")}
                          >
                            7s
                          </div>
                          <div
                            className={`bg-gray-300 hover:bg-gray-400 py-1 px-2 rounded-r ${
                              promptDelay === "10" &&
                              "bg-green-400 hover:bg-green-400"
                            }`}
                            onClick={() => setPromptDelay("10")}
                          >
                            10s
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <div className="mr-2 text-sm">Prompt:</div>

                        <div className="inline-flex text-xs font-bold text-gray-800 cursor-pointer">
                          <div
                            className={`bg-gray-300 hover:bg-gray-400 py-1 px-2 rounded-l ${
                              promptType === "1" &&
                              "bg-green-400 hover:bg-green-400"
                            }`}
                            onClick={() => setPromptType("1")}
                          >
                            +
                          </div>
                          <div
                            className={`bg-gray-300 hover:bg-gray-400 py-1 px-2 ${
                              promptType === "2" &&
                              "bg-green-400 hover:bg-green-400"
                            }`}
                            onClick={() => setPromptType("2")}
                          >
                            FP
                          </div>
                          <div
                            className={`bg-gray-300 hover:bg-gray-400 py-1 px-2 ${
                              promptType === "3" &&
                              "bg-green-400 hover:bg-green-400"
                            }`}
                            onClick={() => setPromptType("3")}
                          >
                            G
                          </div>
                          <div
                            className={`bg-gray-300 hover:bg-gray-400 py-1 px-2 ${
                              promptType === "4" &&
                              "bg-green-400 hover:bg-green-400"
                            }`}
                            onClick={() => setPromptType("4")}
                          >
                            -
                          </div>
                          <div
                            className={`bg-gray-300 hover:bg-gray-400 py-1 px-2 ${
                              promptType === "5" &&
                              "bg-green-400 hover:bg-green-400"
                            }`}
                            onClick={() => setPromptType("5")}
                          >
                            M
                          </div>
                          <div
                            className={`bg-gray-300 hover:bg-gray-400 py-1 px-2 ${
                              promptType === "6" &&
                              "bg-green-400 hover:bg-green-400"
                            }`}
                            onClick={() => setPromptType("6")}
                          >
                            PP
                          </div>
                          <div
                            className={`bg-gray-300 hover:bg-gray-400 py-1 px-2 ${
                              promptType === "7" &&
                              "bg-green-400 hover:bg-green-400"
                            }`}
                            onClick={() => setPromptType("7")}
                          >
                            SC
                          </div>
                          <div
                            className={`bg-gray-300 hover:bg-gray-400 py-1 px-2 rounded-r ${
                              promptType === "8" &&
                              "bg-green-400 hover:bg-green-400"
                            }`}
                            onClick={() => setPromptType("8")}
                          >
                            V
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="bg-gray-300 hover:bg-gray-400 p-2 rounded-br flex items-center"
                      onClick={hideTrackPrompt}
                    >
                      <BsChevronDoubleRight className="" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div
              className="flex flex-grow p-4 pt-16 items-center mx-auto"
              style={{ maxHeight: "calc(100% - 160px)" }}
            >
              {cardsScreen &&
                props.card.facets &&
                (props.card.facets || []).map((facet, index) => {
                  return (
                    <div key={index} className="card materials flex-grow">
                      {facet.image && (
                        <img
                          alt=""
                          src={facet.image}
                          className=""
                          style={{ width: "80%" }}
                        />
                      )}
                      {facet.content && <span>{facet.content}</span>}
                      {facet.youtube && (
                        <iframe
                          title="facet-youtube"
                          width="360"
                          height="300"
                          src={"https://www.youtube.com/embed/" + facet.youtube}
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      )}
                    </div>
                  );
                })}
            </div>

            <div
              className="flex flex-grow-0 justify-end select-none"
              style={{ height: "10rem" }}
            >
              <div
                className="card border-0 bg-partial-white shadow-none flex flex-col"
                style={{ width: "50%" }}
              >
                {tokenCount <= 9 && (
                  <div className="h-8 text-center">
                    I am working for
                    <div className="inline-block relative w-24 ml-3">
                      <select
                        className="block appearance-none w-full border bg-partial-white border-gray-400 hover:border-gray-500 px-2 py-1 pr-4 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        value={token}
                        onChange={handleTokenSelect}
                      >
                        <option value="🍕">Pizza 🍕</option>
                        <option value="🐈">Cats 🐈</option>
                        <option value="⭐️">Stars ⭐️</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                {tokenCount === 10 && (
                  <div className="h-8 text-center">
                    I am
                    <div className="inline-block relative ml-3">
                      <button
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-0 px-0 rounded"
                        type="button"
                        onClick={() => clearTokens()}
                      >
                        Done!
                      </button>
                    </div>
                  </div>
                )}
                <div className="mt-1 cursor-pointer">
                  <div className="flex">
                    <div className="token" onClick={() => handleTokenClick(1)}>
                      {tokenCount >= 1 ? (
                        <span>{token}</span>
                      ) : (
                        <span>&nbsp;</span>
                      )}
                    </div>
                    <div className="token" onClick={() => handleTokenClick(2)}>
                      {tokenCount >= 2 ? (
                        <span>{token}</span>
                      ) : (
                        <span>&nbsp;</span>
                      )}
                    </div>
                    <div className="token" onClick={() => handleTokenClick(3)}>
                      {tokenCount >= 3 ? (
                        <span>{token}</span>
                      ) : (
                        <span>&nbsp;</span>
                      )}
                    </div>
                    <div className="token" onClick={() => handleTokenClick(4)}>
                      {tokenCount >= 4 ? (
                        <span>{token}</span>
                      ) : (
                        <span>&nbsp;</span>
                      )}
                    </div>
                    <div
                      className="token border-r-0"
                      onClick={() => handleTokenClick(5)}
                    >
                      {tokenCount >= 5 ? (
                        <span>{token}</span>
                      ) : (
                        <span>&nbsp;</span>
                      )}
                    </div>
                  </div>
                  <div className="flex">
                    <div
                      className="token border-b-0"
                      onClick={() => handleTokenClick(6)}
                    >
                      {tokenCount >= 6 ? (
                        <span>{token}</span>
                      ) : (
                        <span>&nbsp;</span>
                      )}
                    </div>
                    <div
                      className="token border-b-0"
                      onClick={() => handleTokenClick(7)}
                    >
                      {tokenCount >= 7 ? (
                        <span>{token}</span>
                      ) : (
                        <span>&nbsp;</span>
                      )}
                    </div>
                    <div
                      className="token border-b-0"
                      onClick={() => handleTokenClick(8)}
                    >
                      {tokenCount >= 8 ? (
                        <span>{token}</span>
                      ) : (
                        <span>&nbsp;</span>
                      )}
                    </div>
                    <div
                      className="token border-b-0"
                      onClick={() => handleTokenClick(9)}
                    >
                      {tokenCount >= 9 ? (
                        <span>{token}</span>
                      ) : (
                        <span>&nbsp;</span>
                      )}
                    </div>
                    <div
                      className="token border-b-0  border-r-0"
                      onClick={() => handleTokenClick(10)}
                    >
                      {tokenCount >= 10 ? (
                        <span>{token}</span>
                      ) : (
                        <span>&nbsp;</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Presentation;
