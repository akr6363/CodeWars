function persistence(num) {
    let i = 0
    let num2 = num

    while (num2.toString().length != 1) {
        num2 = num2.toString().split("").reduce((a, b) => a * b, 1)
        i++
    }
    return i
}

persistence(39)
persistence(999)