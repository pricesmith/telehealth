import React from "react";

import { BsThreeDotsVertical } from "react-icons/bs";

function DeckItem(props) {
  return (
    <li
      className={`deck-item flex border-2 ${
        props.border ? props.border : "border-gray-300"
      }`}
    >
      <div
        className="thumb flex-shrink-0 my-1 ml-1 w-12 h-12 bg-gray-300"
        style={{ backgroundImage: "url(/aba/" + props.image + ")" }}
      ></div>

      <div className="flex flex-col flex-grow py-1 px-2">
        <span className="text-gray-700 pl-2 overflow-hidden">
          {props.title}
        </span>
        <span
          className={`text-xs pl-2 overflow-hidden font-bold ${
            props.tagColor ? props.tagColor : "text-green-600"
          }`}
        >
          {props.tag}
        </span>
      </div>

      <div className="py-1">
        <BsThreeDotsVertical />
      </div>
    </li>
  );
}

export default DeckItem;
