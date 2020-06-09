const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("active");
  this.classList.toggle("active-text");
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
