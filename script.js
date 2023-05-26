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

function Phone(event) {
    let input = event.target;
    input.value = phoneMask(input.value);
}
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }
  
function Letras(texto) {
     var tecla = new String();

     if (window.event) {
      tecla = texto.keyCode;
     }
     else if (texto.which) {
      tecla = texto.which;
     }
     else {
      return true;
     }

        if (((tecla < 48) || (tecla > 57)) && (tecla = 8))
        {
            return true;
        }

        else
        {
          return false;
        }

}