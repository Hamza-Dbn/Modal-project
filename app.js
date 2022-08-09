const modalbtn = document.querySelector(".modal-btn");
const modeloverlay = document.querySelector(".modal-overlay");
const closebtn = document.querySelector(".close-btn");

modalbtn.addEventListener("click", function () {
  modeloverlay.classList.add("open-modal");
});

closebtn.addEventListener("click", function () {
  modeloverlay.classList.remove("open-modal");
});
