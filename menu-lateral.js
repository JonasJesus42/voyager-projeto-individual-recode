const botao = document.getElementById('btn-test')
const menu = document.getElementById('1')

botao.addEventListener("click", () =>{
    console.log('evento')
    if( menu.classList.contains("esconder")){
        menu.classList.remove('esconder')
        menu.classList.add('mostrar')
    }else{
        menu.classList.remove('mostrar')
        menu.classList.add('esconder')
    }
})

