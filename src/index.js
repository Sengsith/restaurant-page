import "./style.css";
import initializeHome from "./components/home/home";

const initializeHeader = (() => {
  const headerNav = document.querySelector(".header-nav");

  initializeHome();

  headerNav.addEventListener("click", (e) => {
    switch (e.target.textContent) {
      case "Home":
        initializeHome();
        break;
    }
  });
})();
