import "./content.css";

const initializeContent = (() => {
  const hours = {
    sunday: "10am - 5pm",
    monday: "6am - 6pm",
    tuesday: "8am - 6pm",
    wednesday: "8am - 6pm",
    thursday: "8am - 6pm",
    friday: "8am - 6pm",
    saturday: "10am - 5pm",
  };

  const component = document.querySelector("#content");

  const newH1 = document.createElement("h1");
  newH1.textContent = "Trails into the Pantry";

  const newP = document.createElement("p");
  newP.textContent =
    "Down below are various recipes that appear throught 'The Legend of Heroes' series, we're inspired to give you all a fun experience with the taste of Erebonia cuisine!";

  const newHoursContainer = document.createElement("div");
  const hoursHeading = document.createElement("div");
  hoursHeading.classList.add("subheading");
  hoursHeading.textContent = "Hours";
  newHoursContainer.appendChild(hoursHeading);

  for (const [key, value] of Object.entries(hours)) {
    const newHour = document.createElement("p");
    newHour.classList.add("hour");
    newHour.textContent = `${key}: ${value}`;
    newHoursContainer.appendChild(newHour);
  }

  component.appendChild(newH1);
  component.appendChild(newP);
  component.appendChild(newHoursContainer);
})();

export default initializeContent;
