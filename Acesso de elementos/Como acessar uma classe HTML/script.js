    // função publish criada
    function publish(){
        // constante el selecionando a tag <p> com a classe "prompt"
        // isto é usado quando variás tags tem a mesma classe
        // se estivesse apenas "prompt" no querySelector, seria selecionado a primeira tag com a classe "prompt"
        const el = document.querySelector("p.prompt");
        // declarando a mudança do parágrafo
        el.innerHTML = 'Website publicado';
    }