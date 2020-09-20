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

  const submit = () => {
    fetch("http://localhost:3000/cards", {
      method: "POST",
      body: "Hello",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form id="design-form" onSubmit={submit}>
      <div className="flex flex-col text-3xl mb-3">
        <span className="font-semibold">Design</span>
      </div>

      <div className="flex">
        <div className="flex-col mr-3">
          <h3 className="text-xl">Text</h3>
          <ReactMde
            type="input"
            value={value}
            onChange={setValue}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(converter.makeHtml(markdown))
            }
          />
        </div>

        {/* <div className="flex-col">
          <h3 className="text-xl mb-3">Image</h3>

          <form action="/action_page.php">
            <input type="file" id="myFile" name="filename" />
          </form>
        </div> */}
      </div>
      <button type="submit" form="design-form">
        Create Card
      </button>
    </form>
  );
}

export default Design;
