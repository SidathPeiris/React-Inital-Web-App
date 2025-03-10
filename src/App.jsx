// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)
import Header from "./components/HeaderComponents/Header.jsx";
import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";
import MenuButton from "./components/MenuButton/MenuButton.jsx";

//core concept 1,2 and 3 are examples of short hand notation to get all values in one go, core concept 3 is the long way to import all variables seperately

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
