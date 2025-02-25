    function register() {
        const paragraph = document.querySelector("p");
        const username = document.getElementById("usernameInput").value;
        paragraph.innerHTML = username + ", você foi registrado!";
    }