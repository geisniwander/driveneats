let pratosSelecionados=0;
let bebidasSelecionadas=0;
let sobremesasSelecionadas=0;


function selecionaPrato(idItem){
    const selecionado=document.querySelector(".prato.borda-verde");
    if(selecionado!==null){
        selecionado.classList.remove('borda-verde');
        const sel=selecionado.querySelector('.icone-confirma');
        sel.classList.add('escondido');
    }
    idItem.classList.toggle('borda-verde');
    const bselecionado= idItem.querySelector('.icone-confirma');
    bselecionado.classList.toggle('escondido');
    pratosSelecionados=1;
    ativaBotao();
    }
    
function selecionaBebida(idItem){
    const b_selecionado=document.querySelector(".bebida.borda-verde");
    if(b_selecionado!==null){
        b_selecionado.classList.remove('borda-verde');
        const sel=b_selecionado.querySelector('.icone-confirma');
        sel.classList.add('escondido');
        bebidasSelecionadas=0;
    }
    idItem.classList.toggle('borda-verde');
    const bselecionado= idItem.querySelector('.icone-confirma');
    bselecionado.classList.toggle('escondido');
    bebidasSelecionadas=1;
    ativaBotao();
}

function selecionaSobremesa(idItem){
    const s_selecionado= document.querySelector('.sobremesa.borda-verde');
    if(s_selecionado!==null){
        s_selecionado.classList.remove('borda-verde');
        const sel=s_selecionado.querySelector('.icone-confirma');
        sel.classList.add('escondido');
        sobremesasSelecionadas=0;
    }
    idItem.classList.toggle('borda-verde');
    const bselecionado= idItem.querySelector('.icone-confirma');
    bselecionado.classList.toggle('escondido');
    sobremesasSelecionadas=1;
    ativaBotao();
}

function ativaBotao(){

    if(pratosSelecionados==1 & bebidasSelecionadas==1 & sobremesasSelecionadas==1){
    const botao=document.querySelector('.selecione-itens');
    botao.classList.add('confirmacao');
}
}


