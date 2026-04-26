const mobMenuRefs = {
  openMenuBtn: document.querySelector("[data-mob-menu-open]"),
  closeMenuBtn: document.querySelector("[data-mob-menu-close]"),
  mobMenu: document.querySelector("[data-mob-menu]"),
};

mobMenuRefs.openMenuBtn.addEventListener("click", toggleMobMenu);
mobMenuRefs.closeMenuBtn.addEventListener("click", toggleMobMenu);

function toggleMobMenu() {
  mobMenuRefs.mobMenu.classList.toggle("is-open");
}