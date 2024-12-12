let arr = [1,2,3,4,5,6];

function policz(arr) {
    let suma = 0;
    let iloczyn= 1;
    for (element of arr) {
        suma += element;
        iloczyn *= element;
    }

    console.log('Suma elemntów tablicy to: ' + suma + " a iloczyn elementów tablicy to: " + iloczyn);
}

policz(arr);