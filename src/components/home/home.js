import "./home.css";

const initializeHome = () => {
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
  component.textContent = "";

  const newH1 = document.createElement("h1");
  newH1.textContent = "Trails into the Pantry";

  const newP = document.createElement("p");
  newP.classList.add("heading");
  newP.textContent =
    "Explore through our menu for recipes that appear throughout 'The Legend of Heroes' series. We're inspired to give you all a fun experience with the taste of this unique cuisine!";

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
};

export default initializeHome;
