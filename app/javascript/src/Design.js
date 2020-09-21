import React from "react";

import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

function Design(props) {
  const [value, setValue] = React.useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] = React.useState();

  const csrfToken = document
    .querySelector('[name="csrf-token"]')
    .getAttribute("content");

  return (
    <form
      id="design-form"
      action="http://localhost:3000/cards"
      method="post"
      encType="multipart/form-data"
    >
      <div className="flex flex-col text-3xl mb-3">
        <span className="font-semibold">Design</span>
      </div>

      <div className="flex">
        <div className="flex-col mr-3">
          <h3 className="text-xl">Text</h3>
          <input id="x" type="hidden" name="content" value={value} />
          <ReactMde
            type="input"
            input="x"
            value={value}
            onChange={setValue}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(converter.makeHtml(markdown))
            }
          />
        </div>
        <div className="flex-col">
          <h3 className="text-xl mb-3">Image</h3>
          <input type="file" id="myFile" name="image" />
        </div>
      </div>
      <input type="hidden" name="authenticity_token" value={csrfToken} />
      <button type="submit" form="design-form">
        Create Card
      </button>
    </form>
  );
}

export default Design;
