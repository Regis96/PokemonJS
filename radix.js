var time = new Date().getMilliseconds();
var toSort = [];

for (var i = 0; i < 100000; i++) {
    toSort.push(Math.floor(1 + Math.random() * 999999));
}

var buckets = [[], [], [], [], [], [], [], [], [], []];
var length = toSort.length;
var pos = 0;
while (pos < 6) {
    for (var i = 0; i < length; i++) {
        var radix = toSort[i].toString()[toSort[i].toString().length - pos - 1];
        if (radix) {
            buckets[radix].push(toSort[i]);
        } else {
            buckets[0].push(toSort[i]);
        }
    }
    toSort = [];
    for (var i = 0; i < 10; i++) {
        for (var i2 = 0; i2 < buckets[i].length; i2++) {
            toSort.push(buckets[i][i2]);
        }
        buckets[i] = [];
    }
    pos += 1;
}

console.log(toSort);
console.log(new Date().getMilliseconds() - time);