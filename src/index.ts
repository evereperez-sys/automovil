import { Automovilbuilder } from "./builders/Automovilbuilder";

const builder = new Automovilbuilder();
console.log("\ncar customization");
const miCarro = builder
    .setColor("Gris titan")
    .setInterior("Cuero")
    .conGPS(true)
    .setMotor("Gasolina  420 HP")
    .setSistemaSonido("Bose CAR")
    .build();

miCarro.mostrarPedido();