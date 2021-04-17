import menuItemTpl from "./templates/menu-item.hbs";
import menuItemsTpl from "./templates/menu-items.hbs";
import menu from "./menu.json";

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const menuEl = document.querySelector("ul.js-menu");
const menuMarkup = createMenuMarkup(menu);

menuEl.insertAdjacentHTML("beforeend", menuMarkup);

function createMenuMarkup(menu) {
  return menuItemsTpl(menu);
}

const bodyEl = document.querySelector("body");
const themeSwitchToggleEl = document.querySelector("#theme-switch-toggle");
const localStorageTheme = localStorage.getItem("theme");

bodyEl.classList.add("light-theme");
if (localStorageTheme) bodyEl.setAttribute("class", localStorageTheme);
themeSwitchToggleEl.checked = localStorageTheme === Theme.DARK ? true : false;

themeSwitchToggleEl.addEventListener("change", () => {
  if (themeSwitchToggleEl.checked) {
    bodyEl.setAttribute("class", Theme.DARK);
    localStorage.setItem("theme", Theme.DARK);
  } else {
    bodyEl.setAttribute("class", Theme.LIGHT);
    localStorage.setItem("theme", Theme.LIGHT);
  }
});
