// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)
import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import Header from "./components/HeaderComponents/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import MenuButton from "./components/MenuButton/MenuButton.jsx";

//core concept 1,2 and 3 are examples of short hand notation to get all values in one go, core concept 3 is the long way to import all variables seperately

function App() {
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

  //.map method is used to transform to jsx code
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
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
      </main>
    </div>
  );
}

export default App;
