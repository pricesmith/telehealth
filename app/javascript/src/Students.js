import React from 'react';

import { Link, useRouteMatch} from "react-router-dom";

function Students(props) {
  let { path } = useRouteMatch();

  return (
    <div id="" className="">
      <div className="flex flex-col capitalize text-3xl">
        <span className="font-semibold">Your Clients</span>
      </div>

      <ul>
        <li className="py-3">
          <Link to={`${path}/193`} className="font-semibold">
            Kingston Phillips
          </Link>

          <span className="ml-2">
            Level II
          </span>

          <span className="ml-2 text-sm">
            Yelling, Aggression, Pica
          </span>
        </li>
        <li className="py-3">
          <Link to={`${path}/193`} className="font-semibold">
            Emmalyn Allison
          </Link>

          <span className="ml-2">
            Level III
          </span>

          <span className="ml-2 text-sm">
            Poor instructional control
          </span>
        </li>
        <li className="py-3">
          <Link to={`${path}/193`} className="font-semibold">
            Robin Reilly
          </Link>

          <span className="ml-2">
            Level I
          </span>

          <span className="ml-2 text-sm">
            Weak motor imitation
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Students;
