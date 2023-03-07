function digPow(n, p) {
    let arr = n.toString().split('')
    console.log(arr)
    let rezult = 0
    // let p = p
    for (i = 0; i < arr.length; i++) {
        rezult += arr[i] ** (p + i)
    }
    console.log(rezult)
    console.log(rezult % n)

    rezult % n === 0 ? console.log(rezult / n) : console.log(-1)

    return rezult % n === 0 ? rezult / n : -1

}


digPow(89, 1)
digPow(695, 2)
// digPow(92, 1)
// digPow(46288, 3)