import "./content.css";

const initializeContent = (() => {
  const component = document.querySelector("#content");
  const newH1 = document.createElement("h1");
  const newP = document.createElement("p");

  newH1.textContent = "Trails into the Pantry";
  newP.textContent =
    "Down below are various recipes that appear throught 'The Legend of Heroes' series!";

  component.appendChild(newH1);
  component.appendChild(newP);
})();

export default initializeContent;
