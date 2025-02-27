import Cilindro from "../model/cilindro.js";

describe("Teste unitário da classe Cilindro", () => {
    test("Cálculo da área total", () => {
        const raio = 2;
        const altura = 3; 
        const cilindro = new Cilindro(raio, altura);
        const areaBase = Math.PI * raio * 2;
        const areaLateral = 2 * Math.PI * raio * altura;
        const areaEsperada = 2 * areaBase + areaLateral; 
        expect(cilindro.calcularAreaTotal()).toBeCloseTo(areaEsperada, 2);
    });

    test("Cálculo do volume", () => {
        const raio = 2;
        const altura = 3; 
        const cilindro = new Cilindro(raio, altura);
        const volumeEsperado = Math.PI * raio * 2 * altura; 
        expect(cilindro.calcularVolume()).toBeCloseTo(volumeEsperado, 2);
    });
});