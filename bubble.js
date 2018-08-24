var arr = [];

for (var i = 0; i < 500000; i++) {
    arr.push(Math.round(Math.random() * 1000));
}

var inicio = new Date().getMilliseconds();
var countDef = 0;
var cont = 1;
while (cont > 0) {
    cont = 0;
    for (var i2 = 0; i2 < arr.length; i2++) {
        if (arr[i2] > arr[i2 + 1]) {
            var temp = arr[i2];
            arr[i2] = arr[i2 + 1];
            arr[i2 + 1] = temp;
            cont++;
        }
    }
    countDef+=1;
    console.log(`Ciclo ${countDef}: completo`)
}

var tempoTotal = new Date().getMilliseconds() - inicio;

console.log(tempoTotal);