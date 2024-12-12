
class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }

    opiszKsiazke() {
        if (this.przeczytana == true){
            console.log(`Kiążka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została przeczytana`);
        } else {
            console.log(`Kiążka ma tytuł ${this.tytul}, autorem jest ${this.autor} i nie została przeczytana`);
        }
    }
}

let wpustyni = new Ksiazka("W pustyni i w puszczy","Henryk Sienkiewicz",true);
let wladca = new Ksiazka("Władca pierścieni","J.R.R. Tolkien", false);
let harry = new Ksiazka("Harry Potter", "J.K. Rowling", false)

var tablicaKsiazek = [wpustyni,wladca,harry];

function iloscPrzeczytanych(tabKsiaz){
    let liczPrzeczytane = 0;
    
    tabKsiaz.forEach(function(element){
        if (element.przeczytana == true){
            liczPrzeczytane ++;
        }
        element.opiszKsiazke();

    })
    return liczPrzeczytane;
}

console.log(`Ilość przeczytanych książek: ${iloscPrzeczytanych(tablicaKsiazek)}`);