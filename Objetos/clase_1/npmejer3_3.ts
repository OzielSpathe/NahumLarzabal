class Telefono {
    private estaPrendido: boolean;
    private bateriaActual: number;
    protected linternaPrendida: boolean;
    private mensaje: string;
    private number: number;

    public constructor (){
        this.estaPrendido = true;
        this.bateriaActual = 50;
        this.linternaPrendida = false;
     
        
    } 

    public mandarMensaje(msj: string, number: number): boolean{
        this.mensaje = msj;
        this.number = number;
        this.getMensaje();
        return true;
        
    }


    private getMensaje (): void{
    
        console.log (this.mensaje, this.number);
    }

    public hacerLlamada(): void{
       console.log("marcar un numero: ");

    }

    public prenderApagar(): void{
        if(this.estaPrendido ){
            this.estaPrendido = false;
        }else{
            this.estaPrendido = true;
        }

        console.log(this.estaPrendido)
    }

}

class TelefonoConCamara extends Telefono {
    private camara: Camara;
    constructor (){
    super ();
    this.camara = new Camara();
    }   

    public sacar():string{
        return this.camara.sacarFoto();

    }

}

class Camara {
    public constructor (){

    }
    public sacarFoto():string{
        let foto = "saque una Foto"

       return foto;
        
    }
}

let miTelefono = new TelefonoConCamara ();

miTelefono.mandarMensaje("hola como estas", 154013832);
console.log(miTelefono.sacar());

