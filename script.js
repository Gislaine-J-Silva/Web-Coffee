let menu = document.querySelector ('.menu');

document.querySelector('#menu-botao').onclick = () => {
    menu.classList.toggle('active')
}

let carrinho = document.querySelector ('.itens-carrinho');

document.querySelector('#carrinho-botao').onclick = () => {
    carrinho.classList.toggle('active')
    menu.classList.remove('active')
    pesquisa.classList.remove('active')
}

let pesquisa = document.querySelector('.busca');

document.querySelector('#busca-botao').onclick = () => {
    pesquisa.classList.toggle('active')
    menu.classList.remove('active')
    carrinho.classList.remove('active')
}

window.onscroll = () =>{
    menu.classList.remove('active')
    carrinho.classList.remove('active')
    pesquisa.classList.remove('active')
}