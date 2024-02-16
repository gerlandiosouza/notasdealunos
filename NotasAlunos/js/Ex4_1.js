//relacionar o hmtl como js
const frm = document.querySelector("form")
const resp1 = document.querySelector ("h3")
const resp2 = document.querySelector ("h4")

//criar um escutante de evento

frm.addEventListener ("submit", (e) => {
    const nome = frm.inNome.value // pega os valores dos inputs
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = Number(nota1 + nota2) / 2 //calcula a media

    resp1.innerHTML = `Média das nostas: ${media.toFixed(2)}`

    if (media >= 7) {
        resp2.innerHTML = `Parabéns ${nome}! Você foi aprovado (a)!!`
        resp2.style.color = "blue"
    } else if (media >= 4) {
        resp2.innerHTML = `Atenção ${nome}! Você está em exame de recuperação!`
        resp2.style.color = "orange"
    } 
    else {
        resp2.innerHTML = `Ops! ${nome} você foi reprovado!`
        resp2.style.color = "red"
    }

    e.preventDefault ()
    
})