import Cilindro from './model/Cilindro.js'

export default class Cilindro {
    constructor(raio, altura) {
        this.raio = raio;
        this.altura = altura;
    }

    calcularAreaTotal() {
        return 2 * Math.PI * this.raio * (this.raio + this.altura);
    }

    calcularVolume() {
        return Math.PI * this.raio ** 2 * this.altura;
    }
}