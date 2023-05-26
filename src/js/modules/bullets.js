export function bulletsInit() {
    document.querySelector(".infrastructure .hidden").innerText.split("|").forEach((el, i) => {
        document.querySelectorAll(".infrastructure .swiper-pagination-bullet")[i].textContent = el;
    })
}