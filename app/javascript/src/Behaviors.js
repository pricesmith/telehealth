import React, { useState } from 'react';

import BehaviorCount from './BehaviorCount';
import BehaviorAbc from './BehaviorAbc';
import BehaviorDuration from './BehaviorDuration';
import SkillCount from './SkillCount';
import SkillDuration from './SkillDuration';

import { BsArrowReturnLeft } from 'react-icons/bs';

function Behaviors(props) {
  const [tab, setTab] = useState("behavior");
  const [newBehaviorName, setNewBehaviorName] = useState("");
  const [newSkillName, setNewSkillName] = useState("");
  const [createdBehaviors, setCreatedBehaviors] = useState([]);
  const [createdSkills, setCreatedSkills] = useState([]);

  function createBehavior(event) {
    if(newBehaviorName.length === 0) {return}
    const newBehavior = {name: newBehaviorName, key: Math.random()}
    setCreatedBehaviors([newBehavior].concat(createdBehaviors))
    setNewBehaviorName("")
  }

  function createSkill(event) {
    if(newSkillName.length === 0) {return}
    const newSkill = {name: newSkillName, key: Math.random()}
    setCreatedSkills([newSkill].concat(createdSkills))
    setNewSkillName("")
  }

  function newBehaviorNameChange(event) {
    setNewBehaviorName(event.target.value);
  }

  function newSkillNameChange(event) {
    setNewSkillName(event.target.value);
  }

  return (
    <div className="p-2 pt-4">

      <ul className="flex tab-nav">
        <li className={`${tab === "behavior" && 'active'} tab mr-1 flex-grow text-center`} onClick={() => setTab("behavior")}>
          <a className="" href="#_" onClick={(e) => e.preventDefault()} >
            Behavior
          </a>
        </li>
        <li className={`${tab === "skills" && 'active'} tab flex-grow text-center`} onClick={() => setTab("skills")}>
          <a className="" href="#_" onClick={(e) => e.preventDefault()} >
            Skills
          </a>
        </li>
      </ul>

      <ul className={`${tab !== 'behavior' && 'hidden'} list-reset flex flex-col text-left space-y-1`}>
        <li className="flex bg-gray-200 py-1 px-2">
          <input
            className="simple focus:outline-none h-8 mr-2"
            type="text"
            placeholder="Add Behavior"
            value={newBehaviorName}
            onChange={newBehaviorNameChange}
            />

            <button className="h-8 w-8 bg-gray-500 hover:bg-blue-700 text-white py-1 px-2 rounded shadow focus:outline-none" onClick={createBehavior}>
              <BsArrowReturnLeft />
            </button>
        </li>

        {createdBehaviors.map( (behavior, index) => {
            return (<BehaviorCount key={behavior.key} name={behavior.name} />)
        })}

        <BehaviorCount name="Yelling" count="2" />
        <BehaviorDuration name="Aggression" />
        <BehaviorAbc name="Pica" count="0" />
      </ul>

      <ul className={`${tab !== 'skills' && 'hidden'} list-reset flex flex-col text-left space-y-1`}>
        <li className="flex bg-gray-200 py-1 px-2">
          <input
            className="simple focus:outline-none h-8 mr-2"
            type="text"
            placeholder="Add Skill"
            value={newSkillName}
            onChange={newSkillNameChange}
            />

            <button className="h-8 w-8 bg-gray-500 hover:bg-blue-700 text-white py-1 px-2 rounded shadow focus:outline-none" onClick={createSkill}>
              <BsArrowReturnLeft />
            </button>
        </li>

        {createdSkills.map( (behavior, index) => {
            return (<SkillCount key={behavior.key} name={behavior.name} />)
        })}

        <SkillCount name="Raising hand" count="2" />
        <SkillDuration name="Waiting" />
      </ul>
    </div>
  )
}

export default Behaviors;
