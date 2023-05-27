const numeroA = document.getElementById('Numero-A');
const numeroB = document.getElementById('Numero-B');
const form = document.getElementById('form-numeros');


let numeroValidado = false;

function validaNumero(numeroA,numeroB){
    const resultado =parseInt(numeroA) - parseInt(numeroB);
    return resultado >0;
}



form.addEventListener('submit', function(e){

    e.preventDefault();

    numeroValidado = validaNumero(numeroA.value,numeroB.value);
    const mensagemSucesso = `O número A: <b> ${numeroA.value}</b> é maior que o número B: <b>${numeroB.value}</b>, por isso é válido `
    const mensagemErro = `O número A: <b> ${numeroA.value}</b> é menor que o número B: <b>${numeroB.value}</b>, por isso é inválido `
    
    

    if (numeroValidado){
        const containerResultado = document.querySelector(".success-message")
        containerResultado.innerHTML=mensagemSucesso
        containerResultado.classList.remove('error-message')
        containerResultado.style.display = 'block';
        
    }
    else{
        const containerResultado = document.querySelector(".success-message")

        containerResultado.innerHTML=mensagemErro
        containerResultado.classList.add('error-message')
        containerResultado.style.display = 'block';
    }
}
);
console.log(numeroValidado)

