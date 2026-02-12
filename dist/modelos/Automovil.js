"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Automovil = void 0;
class Automovil {
    constructor() {
        this.techoSolar = false;
        this.gps = false;
    }
    mostrarPedido() {
        console.table({
            Interior: this.interior || "Lona",
            Motor: this.motor || "Sin definir",
            Sonido: this.sistemaSonido || "LG",
            Color: this.color || "Sin Definir",
            Llantas: this.llantas || "Estandar",
            "Techo Solar": this.techoSolar ? "Sí" : "No",
            GPS: this.gps ? "Sí" : "No"
        });
    }
}
exports.Automovil = Automovil;
