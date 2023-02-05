function digitalRoot(n) {
    let n2 = n
    while (n2.toString().length > 1) {
        n2 = n2.toString().split("").reduce((a, b) => Number(a) + Number(b), 0)
    }
    return n2

}

digitalRoot(456)
digitalRoot(493193)
