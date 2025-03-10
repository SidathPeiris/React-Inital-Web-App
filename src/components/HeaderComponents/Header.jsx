import atomImage from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDiscriptor = ["Fundamentals", "Crucial", "Core", "Dynamic"];

function getRadInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

//header component indicated by capital H
export default function Header() {
  const headerDescription = reactDiscriptor[getRadInt(3)];

  return (
    <header>
      <img src={atomImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {headerDescription} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}
