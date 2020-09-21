import React from "react";

import NavItem from "./NavItem";

import { FaCat } from "react-icons/fa";
import { GrBook } from "react-icons/gr";

function PresentationNav(props) {
  const cardList = props.cards ? Object.keys(props.cards) : [];
  const currentIndex = cardList.indexOf(props.card);

  return (
    <div className="text-left p-2 h-full">
      <div className="h-full bg-gray-100 flex flex-row">
        <ul className="cursor-pointer p-1 list-reset flex flex-col text-left space-y-1 max-h-full overflow-y-auto flex-grow">
          <NavItem text="Greeting" completed={true} />
          <NavItem text="Introduce Visuals" completed={true} indent={1} />
          <NavItem text="Target Skills" completed={currentIndex > 5} />
          <NavItem
            text="Tacting"
            index={0}
            currentIndex={currentIndex}
            indent={1}
            navigatePresentation={() => props.navigatePresentation("tacting")}
            subText="1/9 100%"
          />
          <NavItem
            text="Listener Response"
            index={1}
            currentIndex={currentIndex}
            indent={1}
            navigatePresentation={() =>
              props.navigatePresentation("listener_response")
            }
          />
          <NavItem
            text="Social Story"
            index={2}
            currentIndex={currentIndex}
            indent={1}
            navigatePresentation={() =>
              props.navigatePresentation("social_story")
            }
          />
          <NavItem
            text="Intraverbal"
            index={3}
            currentIndex={currentIndex}
            indent={1}
            navigatePresentation={() => props.navigatePresentation("intra")}
          />
          <NavItem
            text="Motor Imitation"
            index={4}
            currentIndex={currentIndex}
            indent={1}
            navigatePresentation={() => props.navigatePresentation("motor")}
          />
          <NavItem
            text="Manding"
            index={5}
            currentIndex={currentIndex}
            indent={1}
            navigatePresentation={() => props.navigatePresentation("mand")}
          />
          <NavItem
            text="Reinforcer"
            index={6}
            currentIndex={currentIndex}
            navigatePresentation={() => props.navigatePresentation("reinforce")}
          />
        </ul>

        <div className="p-1 flex flex-col">
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-l border-b-2 border-l-2 border-teal-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Find materials..."
                aria-label="Full name"
              />
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-1 rounded"
                type="button"
              >
                <FaCat />
              </button>
              <button
                className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-1 rounded"
                type="button"
              >
                <GrBook />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PresentationNav;
