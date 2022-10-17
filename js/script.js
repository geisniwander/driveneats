let pratosSelecionados=0;
let bebidasSelecionadas=0;
let sobremesasSelecionadas=0;
let valorTotal=0.0;
let valorPrato=0;
let valorBebida=0;
let valorSobremesa=0;
let nomePrato="";
let nomeBebida="";
let nomeSobremesa="";


function selecionaPrato(idItem){
    const selecionado=document.querySelector('.prato.borda-verde');
    if(selecionado!==null){
        selecionado.classList.remove('borda-verde');
        selecionado.classList.remove('card');
        const sel=selecionado.querySelector('.icone-confirma');
        sel.classList.add('escondido');
    }
    idItem.classList.toggle('borda-verde');
    idItem.classList.toggle('card');
    const bselecionado= idItem.querySelector('.icone-confirma');
    bselecionado.classList.toggle('escondido');
    pratosSelecionados=1;
    nomePrato=idItem.querySelector('.nome-item').innerHTML;
    valorPrato=idItem.querySelector('.preco-item').innerHTML;
    ativaBotao();
    }
    
function selecionaBebida(idItem){
    const b_selecionado=document.querySelector(".bebida.borda-verde");
    if(b_selecionado!==null){
        b_selecionado.classList.remove('borda-verde');
        b_selecionado.classList.remove('card');
        const sel=b_selecionado.querySelector('.icone-confirma');
        sel.classList.add('escondido');
        bebidasSelecionadas=0;
    }
    idItem.classList.toggle('borda-verde');
    idItem.classList.toggle('card');
    const bselecionado= idItem.querySelector('.icone-confirma');
    bselecionado.classList.toggle('escondido');
    bebidasSelecionadas=1;
    nomeBebida=idItem.querySelector('.nome-item').innerHTML;
    valorBebida=idItem.querySelector('.preco-item').innerHTML;
    ativaBotao();
}

function selecionaSobremesa(idItem){
    const s_selecionado= document.querySelector('.sobremesa.borda-verde');
    if(s_selecionado!==null){
        s_selecionado.classList.remove('borda-verde');
        s_selecionado.classList.remove('card');
        const sel=s_selecionado.querySelector('.icone-confirma');
        sel.classList.add('escondido');
        sobremesasSelecionadas=0;
    }
    idItem.classList.toggle('borda-verde');
    idItem.classList.toggle('card');
    const bselecionado= idItem.querySelector('.icone-confirma');
    bselecionado.classList.toggle('escondido');
    sobremesasSelecionadas=1;
    nomeSobremesa=idItem.querySelector('.nome-item').innerHTML;
    valorSobremesa=idItem.querySelector('.preco-item').innerHTML;
    ativaBotao();
}

function ativaBotao(){
    if(pratosSelecionados==1 & bebidasSelecionadas==1 & sobremesasSelecionadas==1){
    const selecione=document.querySelector('.selecione-itens');
    const fecha=document.querySelector('.fechar-pedido');
    selecione.classList.add('escondido');
    fecha.classList.remove('escondido');
    }
}

function enviaPedido(){
    valorPrato=Number((valorPrato.slice(-6)).replace(',','.'));
    valorBebida=Number(valorBebida.slice(-5).replace(',','.'));
    valorSobremesa=Number(valorSobremesa.slice(-5).replace(',','.'));
    valorTotal=((valorPrato)+(valorBebida)+(valorSobremesa)).toFixed(2);
    let pedido= encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\nTotal: R$ ${valorTotal}`);
    window.location.href = `https://wa.me/?text=${pedido}`;
}

