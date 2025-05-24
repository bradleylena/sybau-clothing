const tooglebutton = document.querySelector(".tooglebutton");
const tooglebuttonIcon = document.querySelector(".tooglebutton");
const dropdownmenu = document.querySelector(".dropdownmenu");

tooglebutton.onclick = function () {
  dropdownmenu.classList.toggle("open");
  const isOpen = dropdownmenu.classList.contains(".open");
};
