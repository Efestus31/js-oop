class Veicolo {
    marca;
    anno;
    colore;
    porte;
    carburante;


    constructor(marca, anno, colore, porte, carburante){
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;
        this.porte = porte;
        this.carburante = carburante;
    }

    informazioni(){
        console.log(`Auto di marchio; ${this.marca} dell'anno ${this.anno} di colore ${this.colore}`);
        
    }

    
}

//creo una nuova instanza della classe veicolo
const Veicolo1 = new Veicolo('Fiat', 2019, 'blu');

