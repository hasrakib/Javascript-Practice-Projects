const checkboxes = document.querySelectorAll('.main input[type="checkbox"]');
const button = document.querySelector(".button");
let lastClick;

function shiftCheck(e) {
  between = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox == this || checkbox == lastClick) {
        between = !between;
      }

      if (between) {
        checkbox.checked = true;
      }
    });
  }
  lastClick = this;
}

function clearAll() {
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", shiftCheck)
);

button.addEventListener("click", clearAll);
