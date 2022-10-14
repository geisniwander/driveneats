function ativaBorda(idItem){
    const id="#"+idItem;
    const idb="#b"+idItem;
    const elemento= document.querySelector(id);
    const botao= document.querySelector(idb);
    elemento.classList.toggle('borda-verde');
    botao.classList.toggle('escondido');
}