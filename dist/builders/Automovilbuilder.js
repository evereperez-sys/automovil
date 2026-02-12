"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Automovilbuilder = void 0;
const Automovil_1 = require("../modelos/Automovil");
class Automovilbuilder {
    constructor() {
        this.carro = new Automovil_1.Automovil();
    }
    setInterior(material) { this.carro.interior = material; return this; }
    setMotor(tipo) { this.carro.motor = tipo; return this; }
    setColor(color) { this.carro.color = color; return this; }
    setLlantas(tipo) { this.carro.llantas = tipo; return this; }
    conTechoSolar(tiene) { this.carro.techoSolar = tiene; return this; }
    setSistemaSonido(marca) { this.carro.sistemaSonido = marca; return this; }
    conGPS(tiene) { this.carro.gps = tiene; return this; }
    build() {
        const newcar = this.carro;
        this.reset();
        return newcar;
    }
    reset() {
        this.carro = new Automovil_1.Automovil();
    }
}
exports.Automovilbuilder = Automovilbuilder;
