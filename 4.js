
function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        let arrLeft = arr.slice(0, i)
        let arrLeftSum = arrLeft.reduce((a, b) => a + b, 0)
        let arrRight = arr.slice((i + 1))
        let arrRightSum = arrRight.reduce((a, b) => a + b, 0)
        if (arrLeftSum === arrRightSum) return i
    }
    return -1
}

findEvenIndex([1, 2, 3, 4, 3, 2, 1])
