const openButton = document.getElementsByClassName("header-sidebar");
const closeButton = document.getElementsByClassName("drop-down-close");

const dropDown = document.getElementsByClassName("drop-down-menu");


openButton[0].addEventListener("click", () => {
  // dropDown[0].style.display = "block";
  dropDown[0].style.top = "0px";
  console.log("hello");
});

closeButton[0].addEventListener("click", () => {
  // dropDown[0].style.display = "none";
  dropDown[0].style.top = "-740px";
  console.log("hello 111");
});