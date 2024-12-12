console.log("Sortowanie stringa");
let doSortowania ='Akademia 108';

function sortuj(ciagZnakow) {
    let arr = ciagZnakow.split('');
    arr.sort();
    let wynik = arr.join('');
    return wynik;
}

let posortowane = sortuj(doSortowania);
console.log(posortowane);