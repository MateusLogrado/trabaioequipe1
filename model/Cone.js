// classe que calcula cone g

export default class Cone {
    constructor(raio, altura) {
        this.raio = raio;
        this.altura = altura;
    }
    
    calcularGeratriz(){
        return Math.sqrt((this.raio * this.raio) + (this.raio * this.raio)) 
    }

    calcularAreaTotal() {
        return Math.PI * this.raio * (this.raio + this.calcularGeratriz());
    }

    calcularVolume() {
        return (1 / 3) * Math.PI * this.raio * 2 * this.altura;
    }
}