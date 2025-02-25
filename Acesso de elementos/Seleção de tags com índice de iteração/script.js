    function displayItem() {
        const el = document.getElementByTagName("li");
        const p = document.querySelector("p");
        p.innerText = el[0].innerHTML;
    }