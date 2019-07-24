class Auto {
    private modeloDelAuto: string;
    private ano: number;
    private marca: string;
    private combustible: string;
    private patente: string;
    private tipoDeMotor: number;
    protected velocidadActual: number;
    

    public constructor(marca: string, modeloDelAuto: string, combustible: string, ano: number, patente: string, motor: number) {
        this.marca = marca;
        this.combustible = combustible;
        this.modeloDelAuto = modeloDelAuto;
        this.ano = ano;
        this.patente = patente;
        this.tipoDeMotor = motor;
        this.velocidadActual = 0;

    }
    public getPatente(): string{
        return this.patente;
    }

    public acelerar():number{
        this.velocidadActual += 5;
        return this.velocidadActual;

    }

    public frenar():number{
        this.velocidadActual -= 2;
        return this.velocidadActual;
    }


}


export default Auto;