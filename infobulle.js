document.addEventListener('DOMContentLoaded', function() {
    let mousePos = { x: undefined, y: undefined };

    window.addEventListener('mousemove', (event) => {
        mousePos = { x: event.clientX, y: event.clientY };
    })
    
    body = document.querySelector("body")
    buttons = document.querySelectorAll(".trait")
    buttons.forEach(button => {
        button.addEventListener("mouseenter", function() {
            infobulle = document.createElement("div");
            infobulle.id = "infobulle"
            infobulle.innerHTML = `<h6>${button.dataset.title}</h6>
            <p><em><b>${button.dataset.prerequis}</b></em></p>
            <p><em><b>Effet Négatif: </b>${button.dataset.negatif}</em></p>
            ${button.dataset.description}`
            infobulle.style.top = mousePos.y;
            infobulle.style.left = mousePos.x;
            body.appendChild(infobulle);
            infobulle = document.querySelector("#infobulle")
            if (mousePos.x > window.screen.width / 2) {
                infobulle.style.setProperty("left", mousePos.x - infobulle.clientWidth, "important");
            }
            if (mousePos.y > window.screen.height / 2) {
                infobulle.style.setProperty("top", mousePos.y - infobulle.offsetHeight)
            }
            
        })
        button.addEventListener("mouseout", function() {
            infobulle = document.querySelector("#infobulle")
            infobulle.remove()
        })
        button.addEventListener("click", function() {
            button.src = button.src.replace("_1", "_0")
                                   .replace("_2", "_1")
                                   .replace("_0", "_2")
        })
    })

    categories = document.querySelector("#choose-category")
    categories.addEventListener('change', function() {
        console.log(categories.value)
        buttons.forEach(button => {
            if (button.classList.contains(categories.value)) {
                button.style.display = "inline"
            }
            else {
                button.style.display = "none"
            }
        })
    })

})