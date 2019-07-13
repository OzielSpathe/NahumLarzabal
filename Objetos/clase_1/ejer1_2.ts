class monitor {
    private estaPrendido: boolean;
    private marca: string;
    private pulgadas: number;

    public constructor(marcaMonitor: string, pulgadas: number) {
        this.estaPrendido = false;
        this.marca = marcaMonitor;
        this.pulgadas = pulgadas;

    }
   public prenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    }
   public prendido(): boolean {
        return this.estaPrendido
    }


}

let miMonitor = new monitor("samsung",42);
miMonitor.prenderApagar();
console.log(miMonitor)