export function scrollUp() {
  document.querySelector(".button-up").addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector('#hero_sec').scrollIntoView({
      behavior: 'smooth'
    });
  })
}