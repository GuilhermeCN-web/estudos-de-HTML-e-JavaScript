    function displayItems() {
        const el = document.querySelectorAll("h3, button");
        const p = document.querySelector("p");
        p.innerText = el.length;
    }