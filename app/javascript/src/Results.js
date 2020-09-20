import React from 'react';
import * as moment from 'moment'

import Timeline from "./Timeline";

function Results(props) {

  return (
    <div className="flex flex-col">
      <div className="flex capitalize text-3xl mb-2">
        <span className="font-semibold">Kingston Phillips</span>
        <span className="ml-2">Level II</span>
      </div>

      <div className="mb-4">
        <div className="flex flex-col">
        </div>
      </div>

      <span className="font-semibold text-2xl mb-2">
        Session 3: Infer by Association
        <span className="ml-2 font-normal text-base text-gray-600">
          {moment(new Date()).subtract(6,'days').format('M/D/YY')}
        </span>
        <span className="ml-2 font-normal text-sm text-gray-600">
          11:58PM (62 minutes)
        </span>
      </span>

      <div className="flex-col">
        <div className="flex justify-between">
          <div className="mb-2">
            <div>
              <span className="text-sm">Token Boards Completed:</span> 6
            </div>

            <div>
              <span className="text-sm">Mastered Goal:</span> Raising Hand
            </div>
          </div>

          <div className="text-sm mr-8">
            <div className="mb-1">
              76% Session Completion
            </div>
            <div className="ml-3">
              6/6 Target Behaviors
            </div>
            <div className="ml-3">
              8/9 Skill acquisitions
            </div>
            <div className="ml-3">
              2/5 Social Stories
            </div>
          </div>
        </div>

        <div className="flex-col w-full mb-8">
          <div className=" text-lg mb-2">
            Behavior Incidence
          </div>

          <Timeline
            start={new Date(0, 0, 0, 12, 0, 0)}
            duration={60}
            data={[
              {
                item: "Yelling",
                events: [0, 25, 40]
              },
              {
                item: "Aggression",
                events: [[10, 15], [18, 20], [59, 60]]
              },
              {
                item: "Pica",
                events: [18]
              },
            ]}
          />

          <div className="text-sm mb-2">
            <span className="font-bold">
              Notes:
            </span> Kingston demonstrated three occurances of yelling, the antecedent to yelling was denied access to preferred item
          </div>

        </div>

        <div className="flex-col w-full">
          <div className=" text-lg mb-2">
            Skill Acquisition
          </div>

          <Timeline
            start={new Date(0, 0, 0, 12, 0, 0)}
            duration={60}
            data={[
              {
                item: "Raising Hand",
                events: [0, 20, 25, 30]
              },
              {
                item: "Waiting",
                events: [[10, 15], [55, 60]]
              }
            ]}
          />

          <div className="text-sm mb-2">
            <span className="font-bold">
              Notes:
            </span> In two of two trials Kingston demonstrated waiting independantly for access to a preferred item
          </div>

        </div>

      </div>

    </div>
  );
}

export default Results;
