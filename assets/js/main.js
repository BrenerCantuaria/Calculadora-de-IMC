
const form = document.querySelector('#form')
form.addEventListener('submit',(evento) =>{
    evento.preventDefault()
    const inputPeso = evento.target.querySelector('#peso')
    const inputAltura = evento.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    console.log(peso,altura)
    if(!peso){
        resultado('Peso inválido',false)
        return
    }
    if(!altura){
        resultado('Altura inválida',false)
        return
    }

    
    const imc = getImc(peso,altura)
    const nivelImc = getNivelImc(imc)
    const mensagem = `Seu IMC é ${imc} (${nivelImc}).`
    
    resultado(mensagem,true)
})
function getNivelImc(imc){
    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']

    if(imc >=39.9) return nivel[5]
    
    if(imc >=34.9) return nivel[4]
    
    if(imc >=29.9) return nivel[3]
    
    if(imc >=24.9) return nivel[2]
    
    if(imc >=18.5) return nivel[1]
    
    if(imc < 18.5) return nivel[0] 
}
function getImc (peso,altura){
    const caculoDoImc = peso/altura **2
    return caculoDoImc.toFixed(2)
}
function criaParagrafo(){
    const paragrafo = document.createElement('p')
    return paragrafo
}   
function resultado(mensagemResultado,validacao){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML =  ''
    const paragrafo = criaParagrafo()
    if(validacao) {
        paragrafo.classList.add('paragrafo-resultado')
    }else{
        paragrafo.classList.add('incorreto')
    }

    paragrafo.innerHTML = mensagemResultado
    resultado.appendChild(paragrafo)
}



