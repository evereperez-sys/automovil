export class Automovil {
    public motor?: string;
    public color?: string;
    public llantas?: string;
    public sistemaSonido?: string;
    public interior?: string;
    public techoSolar: boolean = false;
    public gps: boolean = false;

    public mostrarPedido(): void {
            console.table({
            Interior: this.interior || "Lona",    
            Motor:this.motor || "Sin definir",
            Sonido:this.sistemaSonido || "LG",
            Color:this.color || "Sin Definir",
            Llantas:this.llantas || "Estandar",
            "Techo Solar": this.techoSolar ? "Sí" : "No",
            GPS: this.gps ? "Sí" : "No"
        });
    }
}