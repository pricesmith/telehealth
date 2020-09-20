import React, { useState } from 'react';

import { BsChevronDoubleRight } from 'react-icons/bs';

function DropdownSubmit(props) {
  const [value, setValue] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);

  function valueChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className="select-none">
      <div className="flex">
        <input
          className="simple focus:outline-none h-8"
          type="text"
          placeholder={props.placeholder}
          value={value}
          onChange={valueChange}
          />

        <div className="flex items-center text-gray-700 mr-2" onClick={() => setOpenDropdown(!openDropdown)}>
          <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>

        <button className="h-8 w-8 bg-gray-500 hover:bg-blue-700 text-white py-1 px-2 rounded shadow focus:outline-none" onClick={() => props.onSubmit()}>
          <BsChevronDoubleRight />
        </button>
      </div>

      <div className={`mt-2 ${!openDropdown && 'hidden'}`}>
        <ul>
          {props.options.map( (option, index) => {
              return (
                <li onClick={() => props.onSubmit()}>
                  <p key={index} className="p-2 block text-black hover:bg-grey-light cursor-pointer">
                    {option}
                  </p>
                </li>
              )
          })}
        </ul>
      </div>

    </div>
  );
}

export default DropdownSubmit;
