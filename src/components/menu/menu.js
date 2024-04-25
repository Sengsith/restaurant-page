const initializeMenu = () => {
  const sitDownItems = [
    {
      name: "Pot O' Meat",
      desc: "This pot dish is a must try for meat lovers. Long live bacon!",
      src: "https://static.wikia.nocookie.net/kiseki/images/a/a5/Item_7_%28Sora_Recipe%29.png/revision/latest?cb=20170103025235",
    },
    {
      name: "Bouillabaisse",
      desc: "A fabulous boiled seafood dish in rich bouillon-flavored stock.",
      src: "https://static.wikia.nocookie.net/kiseki/images/9/9a/Item_11_%28Sora_Recipe%29.png/revision/latest?cb=20170103025237",
    },
    {
      name: "Chef's Curry",
      desc: "An appetizing authentic curry with a spicy aroma.",
      src: "https://static.wikia.nocookie.net/kiseki/images/9/9a/Item_11_%28Sora_Recipe%29.png/revision/latest?cb=20170103025237",
    },
    {
      name: "Wild Veggie Pot",
      desc: "A mysterious glowing green pot dish from deep in the mountains.",
      src: "https://static.wikia.nocookie.net/kiseki/images/d/d2/Item_4_%28Sora_Recipe%29.png/revision/latest?cb=20170103025234",
    },
    {
      name: "Jenis Lunch",
      desc: "A cheap, delicious school lunch. Nutritionally balanced.",
      src: "https://static.wikia.nocookie.net/kiseki/images/5/50/Item_9_%28Sora_Recipe%29.png/revision/latest?cb=20170103025236",
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
    const itemName = document.createElement("p");
    const itemDesc = document.createElement("p");

    itemImg.src = item.src;
    itemName.textContent = item.name;
    itemDesc.textContent = item.desc;
    newItem.appendChild(itemImg);
    newItem.appendChild(itemName);
    newItem.appendChild(itemDesc);

    sitDownItemsContainer.appendChild(newItem);
  });

  content.appendChild(newMenuContainer);
};

export default initializeMenu;
// https://kiseki.fandom.com/wiki/List_of_recipes_(Sky_FC)
