tablicaDoSortowania = [12, 67, 34, 23.01, 24, 2, 56, 8, 0*10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];


const sortowanieBabelkowe= (tablica) => {
    for (let i = 0; i<tablica.length; i++){
        for(let j = 0; j<tablica.length; j++){
            if (tablica[j] > tablica [j+1]){
                let wartosc = tablica[j+1];
                tablica[j+1] = tablica[j];
                tablica[j] = wartosc;
            }
        }
    }
    return tablica;
}

console.log(sortowanieBabelkowe(tablicaDoSortowania));