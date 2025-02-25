//função declarada como o nome do id
function publish(){
    //a constante está selecionando a tag(poderia selecionar o id no querySelector(usando . para classe # para id )) ao invés do id
    //poderia selecionar o id no querySelector(usando .id #id ou se tiver mais de uma tag igual, o querySelector usará a primeira )
    const el = document.querySelector("p");
    //será escrito "Website publicado" no <p> ao clicar no botão
    el.innerHTML = "Website publicado!";
}