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
    calcolaEta(){
        const data = new Date();
        const annoCorrente = data.getFullYear();
        const eta = annoCorrente - this.anno;
        return eta
    }

    
}

//creo una nuova instanza della classe veicolo
const veicolo1 = new Veicolo('Fiat', 2019, 'blu');

veicolo1.informazioni();
console.log(`Età del veicolo: ${veicolo1.calcolaEta()} anni`);


class Automobile {
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
        console.log(`Auto con ${this.porte} porte ed alimentazione a ${this.carburante}`);
        
    }
    calcolaEta(){
        const data = new Date();
        const annoCorrente = data.getFullYear();
        const eta = annoCorrente - this.anno;
        return eta
    }

    
}

const automobile1 = new Automobile('Opel', 2020, 'Nera', 4, 'benzina');

automobile1.informazioni();
