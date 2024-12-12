let arr = [1,2,3,4,5,6];

function policz(arr) {
    let sumaIloczynow = 0;
    for (element of arr) {
        let potega = Math.pow(element,2);
        sumaIloczynow += potega;
    }

    console.log('Suma kwadratów elementów tablicy to: ' + sumaIloczynow);
}

policz(arr);