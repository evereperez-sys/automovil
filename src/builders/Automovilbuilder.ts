import { IAutomovilBuilder } from "./IAutomovil";
import { Automovil } from "../modelos/Automovil";

export class Automovilbuilder implements IAutomovilBuilder {
    private carro: Automovil;

    constructor() {
        this.carro = new Automovil();
    }
    public setInterior(material: string): this { this.carro.interior = material; return this; }
    public setMotor(tipo: string): this { this.carro.motor = tipo; return this; }
    public setColor(color: string): this { this.carro.color = color; return this; }
    public setLlantas(tipo: string): this { this.carro.llantas = tipo; return this; }
    public conTechoSolar(tiene: boolean): this { this.carro.techoSolar = tiene; return this; }
    public setSistemaSonido(marca: string): this { this.carro.sistemaSonido = marca; return this; }
    public conGPS(tiene: boolean): this { this.carro.gps = tiene; return this; }

    public build(): Automovil {
        const newcar = this.carro;
        this.reset();
        return newcar;
    }

    private reset(): void {
        this.carro = new Automovil();
    }
}