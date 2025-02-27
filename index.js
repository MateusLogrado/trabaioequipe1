import Cone from './model/Cone.js'
import Cilindro from './model/Cilindro.js'

const calcular = document.getElementById("calcular")
const res = document.getElementById("res")

calcular.addEventListener('click' , ()=>{
    let raio = Number(document.getElementById("raio").value)
    console.log(raio)


    const Cone = new Cone(raio, altura)
    const area = Cone.calcularAreaTotal().toFixed(2)
    const volume =  Cone.calcularVolume().toFixed(2)

    console.log(`area =   ${area}`)
    console.log(`volume =   ${volume}`)

    res.innerHTML = " "
    res.innerHTML += `A area é: ${area} <br>`
    res.innerHTML += `O volume é: ${area} <br><br>`
})
