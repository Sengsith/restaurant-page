import "./about.css";

const initializeAbout = () => {
  const content = document.querySelector("#content");
  content.textContent = "";

  // Container for entire about
  const newAboutContainer = document.createElement("div");
  newAboutContainer.classList.add("menu-container");

  // Heading
  const newHeading = document.createElement("h2");
  newHeading.classList.add("heading");
  newHeading.textContent = "About";
  newAboutContainer.appendChild(newHeading);

  // About container
  const newOwnerContainer = document.createElement("div");
  newOwnerContainer.classList.add("owner-container");
  newAboutContainer.appendChild(newOwnerContainer);

  const newDesc = document.createElement("p");
  newDesc.classList.add("about-desc");
  newDesc.textContent =
    "Thank you for your interest in visiting our store and menu! If you are interested in contacting us, there are additional details down below.";
  newOwnerContainer.appendChild(newDesc);

  // Contact container
  const newContactContainer = document.createElement("div");
  newContactContainer.classList.add("contact-container");
  newAboutContainer.appendChild(newContactContainer);

  // Subheading
  const newSubHeading = document.createElement("h3");
  newSubHeading.classList.add("subheading");
  newSubHeading.textContent = "Contact Us!";
  newContactContainer.appendChild(newSubHeading);

  // Name
  const newName = document.createElement("p");
  newName.classList.add("name");
  newName.textContent = "Bean Bwrazer";
  newContactContainer.appendChild(newName);

  // Phone
  const newPhone = document.createElement("p");
  newPhone.classList.add("phone");
  newPhone.textContent = "123-456-7890";
  newContactContainer.appendChild(newPhone);

  // Address
  const newAddress = document.createElement("p");
  newAddress.classList.add("address");
  newAddress.textContent = "123 Ymir Valley";
  newContactContainer.appendChild(newAddress);

  content.appendChild(newAboutContainer);
};

export default initializeAbout;
