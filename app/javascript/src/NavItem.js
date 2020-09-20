import React from 'react';

function NavItem(props) {
  const completed = () => {
    if(props.completed === undefined){
      return props.index < props.currentIndex
    } else {
      return props.completed
    }
  }

  const active = () => {
    if(props.index === undefined){
      return false
    } else {
      return props.index === props.currentIndex
    }
  }

  return (
    <li
      className={`flex flex-row justify-between border-b-2 ${completed() ? 'border-gray-300 text-gray-600' : 'border-blue-200 hover:border-blue-300'} ${props.indent && 'ml-3'}`}
      onClick={() => props.navigatePresentation && props.navigatePresentation(props.cardName)}
    >
      <span className={`${active() && 'text-green-600'} ${active() && 'font-bold'} pr-2 pt-1`} >
        {props.text}
      </span>
      <span>
        {props.subText}
      </span>
    </li>
  );
}

export default NavItem;
