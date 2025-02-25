import Cone from "../model/Cone.js";

describe("Teste unitário da classe Cone", () => {
    test("Cálculo da área total", () => {
        const raio = 2;
        const altura = 3; 
        const cone = new Cone(raio, altura);
        const geratriz = Math.sqrt(raio ** 2 + altura ** 2);
        const areaEsperada = Math.PI * raio * (raio + geratriz);
        expect(cone.calcularAreaTotal()).toBeCloseTo(areaEsperada, 2);
    });

    test("Cálculo do volume", () => {
        const raio = 2;
        const altura = 3; 
        const cone = new Cone(raio, altura);
        const volumeEsperado = (1 / 3) * Math.PI * raio ** 2 * altura;
        expect(cone.calcularVolume()).toBeCloseTo(volumeEsperado, 2);
    });
});