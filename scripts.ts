class Jugador{
    vida = 100; //vida : number = 100;
    habilidad = 100; //habilidad : number = 100;
    kamekameha = 300; //kamekameha : number = 300;
    nombre = ""; //nombre : string = "";

    constructor(nombre : string){ 
        this.nombre = nombre;
    }

    curar(jugadorObjetivo : any){
        if (this.vida >=100) {
            console.log("no tines suficiente habilidad")
        }else{
            jugadorObjetivo.vida += 20;
            this.habilidad -= 40;
        }
        
        this.status(jugadorObjetivo);
    }

    atacar(jugadorObjetivo : any){
        jugadorObjetivo.vida -= 20;
        this.habilidad -= 40;
        this.status(jugadorObjetivo);
    }

    kame(jugadorObjetivo : any){
        if (this.habilidad >= 30) {
            jugadorObjetivo.vida -=45;
            this.habilidad -= this.kamekameha;
        }else{
            console.log("No hay habilidad suficiente")
        }
        this.status(jugadorObjetivo);
    }

    

    revivir(jugadorObjetivo: any){
        if (this.vida <=0) {
            jugadorObjetivo.vida += 30;
        }else{
            console.log("No se puede usar esta habilidad")
        }
        this.status(jugadorObjetivo);
    }

    status(jugadorObjetivo : number){
        console.log(jugadorObjetivo);
        console.log(this);
    }
    

    
}

let Goku = new Jugador('Goku');
let Vegeta = new Jugador('Vegeta');

console.log(Goku);
console.log(Vegeta);