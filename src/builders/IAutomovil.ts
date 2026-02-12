// Interfaz

import { Automovil } from "../modelos/Automovil";

export interface IAutomovilBuilder {
    setInterior(material: string): this;
    setColor(color: string): this;
    setMotor(tipo: string): this;
    setLlantas(tipo: string): this;
    setSistemaSonido(marca: string): this;
    conTechoSolar(tiene: boolean): this;
    conGPS(tiene: boolean): this;
    build(): Automovil;
}