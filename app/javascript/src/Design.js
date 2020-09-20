import React from 'react';

import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});



function Design(props) {

  const [value, setValue] = React.useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] = React.useState();

  return (
    <div id="" className="">
      <div className="flex flex-col capitalize text-3xl mb-3">
        <span className="font-semibold">Design</span>
      </div>

      <div className="flex">
        <div className="flex-col mr-3">
          <h3 className="text-xl">Text</h3>
          <ReactMde
            value={value}
            onChange={setValue}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={markdown =>
              Promise.resolve(converter.makeHtml(markdown))
            }
          />
        </div>

        <div className="flex-col">
          <h3 className="text-xl mb-3">Image</h3>

          <form action="/action_page.php">
            <input type="file" id="myFile" name="filename" />
          </form>

        </div>
      </div>


    </div>
  );
}

export default Design;
