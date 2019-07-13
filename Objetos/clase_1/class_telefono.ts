class Telefono {
    private estaPrendido: boolean // variables internas como privadas - que solo lo vea el programador

    constructor() {
        this.estaPrendido = true;
    }

    prenderApagarTelefono(): void {
        if (this.estaPrendido)
        this.estaPrendido = false;
        else
        this.estaPrendido = true;
    }
    prendido(): boolean {
        return this.estaPrendido
    }
}

let miTelefono = new Telefono();
miTelefono.prenderApagarTelefono();

console.log("esta prendido loquito"+miTelefono.prendido());