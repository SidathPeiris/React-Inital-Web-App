import { useState } from "react";
import { EXAMPLES } from "../../data.js";
import MenuButton from "../MenuButton/MenuButton.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  //content in menu when first loaded page and no examples are selected
  let MenuContent = <p>Please select topic.</p>;

  if (selectedTopic) {
    MenuContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2> Examples </h2>
      <menu>
        <MenuButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          {" "}
          Components
        </MenuButton>
        <MenuButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          {" "}
          JSX
        </MenuButton>
        <MenuButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          {" "}
          Props
        </MenuButton>
        <MenuButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          {" "}
          State
        </MenuButton>
      </menu>
      {MenuContent}
    </section>
  );
}
