var Jugador = /** @class */ (function () {
    function Jugador(nombre) {
        this.vida = 100; 
        this.habilidad = 100; 
        this.kamekameha = 300; 
        this.nombre = ""; 
        this.nombre = nombre;
    }
    Jugador.prototype.curar = function (jugadorObjetivo) {
        if (this.vida >= 100) {
            console.log("no tines suficiente habilidad");
        }
        else {
            jugadorObjetivo.vida += 20;
            this.habilidad -= 40;
        }
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.atacar = function (jugadorObjetivo) {
        jugadorObjetivo.vida -= 20;
        this.habilidad -= 40;
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.kame = function (jugadorObjetivo) {
        if (this.habilidad >= 30) {
            jugadorObjetivo.vida -= 45;
            this.habilidad -= this.kamekameha;
        }
        else {
            console.log("No hay habilidad suficiente");
        }
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.revivir = function (jugadorObjetivo) {
        if (this.vida <= 0) {
            jugadorObjetivo.vida += 30;
        }
        else {
            console.log("No se puede usar esta habilidad");
        }
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.status = function (jugadorObjetivo) {
        console.log(jugadorObjetivo);
        console.log(this);
    };
    return Jugador;
}());
var Goku = new Jugador('Goku');
var Vegeta = new Jugador('Vegeta');
console.log(Goku);
console.log(Vegeta);
