export function popups() {
    const popups = document.querySelectorAll('.popup')

    const openButton = document.querySelectorAll('[data-popup]')
    const submitButton = document.querySelectorAll('[data-submit]')
    const closeButton = document.querySelectorAll('[data-close]')

    const body = document.querySelector('body');

    const openPopup = (popup) => {
        popup.classList.add("open")
        body.style.overflow = "hidden"
    }
    const closePopup = (popup) => {
        popup.classList.remove("open")
        body.style.overflow = "visible"
    }

    const closeAllPopups = () => {
        popups.forEach(el => {
            closePopup(el)
        })
    }

    openButton.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault()
            popups.forEach(el => {
                console.log(el);
                if ("#" + el.attributes[1].nodeValue === button.dataset.popup) {
                    openPopup(el)
                }
            })
        })
    })
    submitButton.forEach(button => {
        button.addEventListener("click", (e) => {
            popups.forEach(el => {
                if ("#" + el.attributes[1].nodeValue === button.dataset.submit) {
                    openPopup(el)
                }
            })
        })
    })
    closeButton.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault()
            closeAllPopups()
        })
    })

    document.querySelector('body').addEventListener("mousedown", (e) => {
        if (!e.target.closest(".popup__content")) {
            closeAllPopups();
        }
    })
}