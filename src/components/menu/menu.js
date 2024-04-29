import "./menu.css";

import potOMeat from "../../assets/potomeat.png";
import bouillabaisse from "../../assets/bouillabaisse.png";
import chefCurry from "../../assets/curry.png";
import wildVeggiePot from "../../assets/wildveggiepot.png";
import jenisLunch from "../../assets/jenislunch.png";
import mixedCocktail from "../../assets/mixedcocktail.png";
import eggnog from "../../assets/eggnog.png";
import fruitMilk from "../../assets/fruitmilk.png";
import azeliaRose from "../../assets/azeliarose.png";
import espresso from "../../assets/espresso.png";

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

  const drinkItems = [
    {
      name: "Mixed Cocktail",
      desc: "The ultimate cocktail; crammed with condensed food extracts.",
      src: mixedCocktail,
    },
    {
      name: "Specialty Eggnog",
      desc: "An Eastern world hot cocktail. Warms the body to the core.",
      src: eggnog,
    },
    {
      name: "Fruit Milk",
      desc: "A fruit-flavored lactic treat. Perfect for after a bath.",
      src: fruitMilk,
    },
    {
      name: "Azelia Rose",
      desc: "A refreshing cocktail made from a pungent fruit juice.",
      src: azeliaRose,
    },
    {
      name: "Rich Espresso",
      desc: "A cup of coffee that will even wake a hibernating bear.",
      src: espresso,
    },
  ];

  const content = document.querySelector("#content");
  content.textContent = "";

  // Container for entire menu
  const newMenuContainer = document.createElement("div");
  newMenuContainer.classList.add("menu-container");

  // Heading
  const newHeading = document.createElement("h2");
  newHeading.classList.add("heading");
  newHeading.textContent = "Menu";
  newMenuContainer.appendChild(newHeading);

  // Container for sit down items
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

  // Container for drinks
  const drinkItemsContainer = document.createElement("div");
  drinkItemsContainer.classList.add("drink-items-container");
  newMenuContainer.appendChild(drinkItemsContainer);

  const drinkItemsSubheading = document.createElement("h3");
  drinkItemsSubheading.classList.add("subheading");
  drinkItemsSubheading.textContent = "Drinks";
  drinkItemsContainer.appendChild(drinkItemsSubheading);

  drinkItems.forEach((item) => {
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

    drinkItemsContainer.appendChild(newItem);
  });

  content.appendChild(newMenuContainer);
};

export default initializeMenu;
// https://kiseki.fandom.com/wiki/List_of_recipes_(Sky_FC)
