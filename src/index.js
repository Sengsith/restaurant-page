import "./style.css";
import initializeHome from "./components/home/home";
import initializeMenu from "./components/menu/menu";
import initializeAbout from "./components/about/about";

const initializeHeader = (() => {
  const headerNav = document.querySelector(".header-nav");

  initializeHome();

  headerNav.addEventListener("click", (e) => {
    switch (e.target.textContent) {
      case "Home":
        initializeHome();
        break;
      case "Menu":
        initializeMenu();
        break;
      case "About":
        initializeAbout();
        break;
    }
  });
})();
