function fibbonaci(n) {
    console.log("Element ciągu nr: " + n);
    wartosc1 = 0;
    wartosc2 = 1;
    suma = 0;
    if (n == 1) {
        suma = wartosc2;
    } else if (n == 2) {
        suma = wartosc2;
    } else if (n > 2) {
        for (let i=0; i<n-1; i++){
          suma= wartosc1 + wartosc2;
           wartosc1 = wartosc2;
            wartosc2 = suma;
        }
    }
    console.log("Wartość elementu: " + suma);
}


fibbonaci(1);
fibbonaci(2);
fibbonaci(3);
fibbonaci(4);
fibbonaci(5);
fibbonaci(6);
fibbonaci(7);
fibbonaci(8);
fibbonaci(9);
fibbonaci(10);
fibbonaci(23);