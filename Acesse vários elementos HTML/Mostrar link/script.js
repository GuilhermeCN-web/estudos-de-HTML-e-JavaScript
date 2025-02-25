    function displayImageLink() {
        const el = document.querySelectorAll(".movie, .sports, img");
        const p = document.querySelector("p");
        p.innerText = el[2].src;    
    }