export function burger() {
  const button = document.querySelector(".burger");
  const burger = document.querySelector(".nav");
  const body = document.querySelector('body');

  let opened = false;
  const openBurger = () => {
    button.classList.add("open")
    burger.classList.add("open")
    body.style.overflow = "hidden"
  }
  const closeBurger = () => {
    button.classList.remove("open")
    burger.classList.remove("open")
    body.style.overflow = "visible"
  }

  const popupProcess = () => {
    opened ? openBurger() : closeBurger();
  }

  button.addEventListener("click", () => {
    opened = !opened;
    popupProcess();
  })

  body.addEventListener("mousedown", (e) => {
    if (!e.target.closest(".burger")) {
      opened = false;
      popupProcess();
    }
  })
}