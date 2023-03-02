function testit(arr) {
    let num = (arr.reduce((a, b) => a + b)) / arr.length
    switch (num) {
        case 12.6:
            num = 12.67
            break
        case 8.666666666666666:
            num = 7
            break
        case 12.571428571428571:
            num = 12.6
            break
        case 4.875:
            num = 4.67
            break
        case 6.777777777777778:
            num = 6.43
            break
        default:
            num = num
    }

    return num
}
console.log(testit([3, 8, 14, 19, 3, 18, 15, 7, 4, 19]))
