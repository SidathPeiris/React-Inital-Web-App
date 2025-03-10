import "./CoreConcept.css";

//object descructuring, but have to use the same variable names as in data.js eg. image , title and description
export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img scr={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
