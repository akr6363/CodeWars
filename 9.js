Array.prototype.numberOfOccurrences = function (n) {
    console.log(this.filter(el => el === n).length)


}

var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0);
arr.numberOfOccurrences(4);
arr.numberOfOccurrences(2);
arr.numberOfOccurrences("a");