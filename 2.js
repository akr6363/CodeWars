function arrayDiff(a, b) {
    return a.filter(el => !b.includes(el))
}

arrayDiff([1, 2, 2, 3, 4, 5, 6], [1, 2, 5])

arrayDiff([1, 2], [1])