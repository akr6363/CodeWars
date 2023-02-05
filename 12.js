function moveZeros(arr) {
    let countZero = arr.filter(el => el === 0).length
    let arr2 = arr.filter(el => el !== 0)
    for (let i = 1; i <= countZero; i++) {
        arr2.push(0)
    }
    return arr2
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])