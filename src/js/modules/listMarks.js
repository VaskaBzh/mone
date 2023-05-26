export function renderLists() {
    document.querySelectorAll(".list").forEach((list) => {
        list.querySelectorAll(".list_item").forEach((item, i) => {
            item.innerHTML = `<span class="list_mark">${i}</span> ${item.innerHTML}`
        })
    })
}