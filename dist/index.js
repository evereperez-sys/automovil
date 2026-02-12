"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Automovilbuilder_1 = require("./builders/Automovilbuilder");
const builder = new Automovilbuilder_1.Automovilbuilder();
console.log("\ncar customization");
const miCarro = builder
    .setColor("Gris titan")
    .setInterior("Cuero")
    .conGPS(true)
    .setMotor("Gasolina  420 HP")
    .setSistemaSonido("Bose CAR")
    .build();
miCarro.mostrarPedido();
