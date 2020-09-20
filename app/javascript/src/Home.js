import React from 'react';
import { Route, NavLink, Link, Switch, useRouteMatch} from "react-router-dom";

import Results from './Results';
import ResultsSide from './ResultsSide';
import Students from './Students';
import Student from './Student';
import StudentSide from './StudentSide';
import Materials from './Materials';
import MaterialsSide from './MaterialsSide';
import Design from './Design';
import Resources from './Resources';

import { BsPerson, BsCardImage, BsBook, BsBell } from 'react-icons/bs';
import { GiLargePaintBrush } from 'react-icons/gi';

function Home(props) {
  let { path } = useRouteMatch();

  return (
    <div id="" className="flex">

      <div className="h-screen w-full flex overflow-hidden">
        <nav className="w-24 h-full flex flex-col items-center bg-white py-4">
          <div>
            <svg className="h-8 w-8 fill-current text-teal-600" viewBox="0 0 24 24">
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82
      				    6L12 12.72 5.18 9 12 5.28 18.82 9M17 16l-5 2.72L7 16v-3.73L12
      				    15l5-2.73V16z">
              </path>
            </svg>
          </div>

          <ul className="user-area-nav mt-2 text-gray-700 capitalize">
            <li className="mt-3 p-2 rounded-lg">
              <NavLink to={`${path}/students`} className="flex flex-col items-center" activeClassName="active">
                <BsPerson className="fill-current h-5 w-5" />
                <span className="text-xs mt-2">Clients</span>
              </NavLink>
            </li>

            <li className="mt-3 p-2 rounded-lg">
              <NavLink to={`${path}/materials`} className="flex flex-col items-center">
                <BsCardImage className="fill-current h-5 w-5" />
                <span className="text-xs mt-2">Materials</span>
              </NavLink>
            </li>

            <li className="mt-3 p-2 rounded-lg">
              <NavLink to={`${path}/Design`} className="flex flex-col items-center">
                <GiLargePaintBrush className="fill-current h-5 w-5" />
                <span className="text-xs mt-2">Design</span>
              </NavLink>
            </li>

            <li className="mt-3 p-2 rounded-lg">
              <NavLink to={`${path}/Resources`} className="flex flex-col items-center">
                <BsBook className="fill-current h-5 w-5" />
                <span className="text-xs mt-2">Resources</span>
              </NavLink>
            </li>
          </ul>

          <div className="mt-auto flex items-center p-2 text-blue-700 bg-purple-200 rounded-full">
            <Link to='/'>
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path d="M12 1c-5 0-9 4-9 9v7a3 3 0 003 3h3v-8H5v-2a7 7 0 017-7 7 7 0 017 7v2h-4v8h4v1h-7v2h6a3 3 0 003-3V10c0-5-4.03-9-9-9z"></path>
              </svg>
            </Link>
          </div>
        </nav>

        <main className="my-1 pt-2 pb-2 px-10 flex-1 bg-gray-200 rounded-l-lg transition duration-500 ease-in-out overflow-y-auto">
          <Switch>
            <Route path={`${path}/students/results`} component={Results}/>
            <Route path={`${path}/students/:id`} component={Student}/>
            <Route path={`${path}/students`} component={Students}/>
            <Route path={`${path}/materials`} component={Materials}/>
            <Route path={`${path}/design`} component={Design}/>
            <Route path={`${path}/Resources`} component={Resources}/>
          </Switch>
        </main>

        <aside className="w-1/4 my-1 mr-1 pr-6 py-4 flex flex-col bg-gray-200 rounded-r-lg">
          <div className="flex items-center justify-end">
            <a href="inbox/" className="relative hidden">
              <span>
                <BsBell className="text-xl" />
              </span>
              <div className="absolute w-2 h-2 left-0 mb-6 ml-2 bottom-0">
                <span className="px-2 py-1 bg-red-600 rounded-full text-white text-xs">7</span>
              </div>
            </a>
            <div className="flex items-center">
              <img className="h-10 w-10 rounded-full object-cover" src={process.env.PUBLIC_URL + '/tempest-profile.png'} alt="tempest profile" />
              <button className="ml-1 focus:outline-none">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 192 512">
                  <path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72
      						      72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72
      						      72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8
      						      32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div>
          <Switch>
            <Route path={`${path}/students/results`} component={ResultsSide}/>
            <Route path={`${path}/students/:id`} component={StudentSide}/>
            <Route path={`${path}/materials`} component={MaterialsSide}/>
          </Switch>
          </div>
        </aside>
      </div>

    </div>
  );
}

export default Home;
