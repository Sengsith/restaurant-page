import "./menu.css";

import potOMeat from "../../assets/potomeat.png";
import bouillabaisse from "../../assets/bouillabaisse.png";
import chefCurry from "../../assets/curry.png";
import wildVeggiePot from "../../assets/wildveggiepot.png";
import jenisLunch from "../../assets/jenislunch.png";

const initializeMenu = () => {
  const sitDownItems = [
    {
      name: "Pot O' Meat",
      desc: "This pot dish is a must try for meat lovers. Long live bacon!",
      src: potOMeat,
      alt: "meat-stew-in-clay-pot-on-portable-burner",
    },
    {
      name: "Bouillabaisse",
      desc: "A fabulous boiled seafood dish in rich bouillon-flavored stock.",
      src: bouillabaisse,
      alt: "seafood-dish-in-pot",
    },
    {
      name: "Chef's Curry",
      desc: "An appetizing authentic curry with a spicy aroma.",
      src: chefCurry,
      alt: "rice-plate-with-gravy-boat-and-water-glass",
    },
    {
      name: "Wild Veggie Pot",
      desc: "A mysterious glowing green pot dish from deep in the mountains.",
      src: wildVeggiePot,
      alt: "veggie-pot",
    },
    {
      name: "Jenis Lunch",
      desc: "A cheap, delicious school lunch. Nutritionally balanced.",
      src: jenisLunch,
      alt: "chicken-steak-soup-dish",
    },
  ];

  const content = document.querySelector("#content");
  content.textContent = "";

  // Container for the entire menu
  const newMenuContainer = document.createElement("div");
  newMenuContainer.classList.add("menu-container");

  // Heading
  const newHeading = document.createElement("h2");
  newHeading.classList.add("heading");
  newHeading.textContent = "Menu";
  newMenuContainer.appendChild(newHeading);

  // Container for the sit down items
  const sitDownItemsContainer = document.createElement("div");
  sitDownItemsContainer.classList.add("sit-down-items-container");
  newMenuContainer.appendChild(sitDownItemsContainer);

  const sitDownItemsSubheading = document.createElement("h3");
  sitDownItemsSubheading.classList.add("subheading");
  sitDownItemsSubheading.textContent = "Sit Down Items";
  sitDownItemsContainer.appendChild(sitDownItemsSubheading);

  sitDownItems.forEach((item) => {
    const newItem = document.createElement("div");
    newItem.classList.add("menu-item");

    const itemImg = new Image();
    itemImg.classList.add("item-img");
    const textContainer = document.createElement("div");
    textContainer.classList.add("item-text");
    const itemName = document.createElement("p");
    itemName.classList.add("item-name");
    const itemDesc = document.createElement("p");
    itemDesc.classList.add("item-desc");
    textContainer.appendChild(itemName);
    textContainer.appendChild(itemDesc);

    itemImg.src = item.src;
    itemImg.alt = item.alt;
    itemName.textContent = item.name;
    itemDesc.textContent = item.desc;
    newItem.appendChild(itemImg);
    newItem.appendChild(textContainer);

    sitDownItemsContainer.appendChild(newItem);
  });

  content.appendChild(newMenuContainer);
};

export default initializeMenu;
// https://kiseki.fandom.com/wiki/List_of_recipes_(Sky_FC)
