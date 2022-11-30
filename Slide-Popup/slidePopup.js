const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const popup = document.querySelector(".popup");
const mainPopup = document.querySelector(".main-popup");
const SHOW_POPUP_CSS =
   "animation:slide-in .5s ease; animation-fill-mode: forwards;";
const HIDE_POPUP_CSS =
   "animation:slide-out .5s ease; animation-fill-mode: forwards;";

openBtn.addEventListener("click", () => {
   popup.style.display = "flex";
   mainPopup.style.cssText = SHOW_POPUP_CSS;
});

closeBtn.addEventListener("click", () => {
   closePopup();
});

window.addEventListener("click", (e) => {
   if (e.target == document.querySelector(".popup-overlay")) {
      closePopup();
   }
});

function closePopup() {
   mainPopup.style.cssText = HIDE_POPUP_CSS;
   setTimeout(() => {
      popup.style.display = "none";
   }, 500);
}
