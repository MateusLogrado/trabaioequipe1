export default class Cone {
    constructor(raio, altura) {
        this.raio = raio;
        this.altura = altura;
    }

    calcularAreaTotal() {
        const geratriz = Math.sqrt(this.raio * 2 + this.altura * 2);
        return Math.PI * this.raio * (this.raio + geratriz);
    }

    calcularVolume() {
        return (1 / 3) * Math.PI * this.raio * 2 * this.altura;
    }
}