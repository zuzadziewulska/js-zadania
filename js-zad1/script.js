console.log("Odwracanie stringa");

function odwracanie (napis) {
    let odwrocony = "";
    for (i in napis){
        let litera = napis[napis.length-i-1];
        odwrocony = odwrocony + litera;
    }
    return odwrocony;

};

let wynik = odwracanie("Akademia 108");
console.log(wynik);