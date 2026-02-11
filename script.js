let display = document.querySelector('#display')
let buttons = document.querySelectorAll('.box-buttons button')


// Função ADICIONAR
function addToDisplay(value){
    if(display.value === 'Erro') {
        display.value = ''
    }
    display.value += value
}



// Função Limpar a tela

function clearDisplay(){
    display.value = ''
}

// Função Apagar digito
function backspace(){
    display.value = display.value.slice(0, -1)
}


// Função resultado
function result(){
    if(display.value === '' || display.value === 'Erro' ){
        return
    }
    try {
        let allowed = /^[0-9+\-*/.() ]+$/
        // se o valor do display for diferente do:
                // caracteres filtrados
        if(!allowed.test(display.value)){
            display.value = 'Erro'
            return
        }

        let last = display.value.slice(-1)
        // Se o ultimo caractere do display estiver incluso na string,
        // mostra erro
        if ('+-*/.'.includes(last)){
            display.value = 'Erro'
            return
        }
        const resultValue = Function('return ' + display.value)()
        display.value = String(resultValue)
    }
    catch(e){
        display.value = 'Erro'
    }

    

}









// eventos

buttons.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        let value = btn.textContent
        if(value === 'C'){
            display.value =''
            return
        }
        if(value === '<'){
            backspace()
            return
        }
        if(value === '='){
            result()
            return
        }
        addToDisplay(value)
    })
})