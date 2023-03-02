var hanoi = function (disks) {
    let num = 0
    for (i = 1; i <= disks; i++) {
        num = num * 2 + 1
    }
    return num
};

console.log(hanoi(3))