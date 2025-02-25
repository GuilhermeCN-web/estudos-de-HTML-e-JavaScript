    function displayItem(){
        const el = document.getElementsByClassName("urgent"); 
            const p = document.querySelector("p");
                p.innerText = "You have " + el.length + " urgent tasks";
    }