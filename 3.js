function findOutlier(integers) {
    let evenArr = []
    let oddArr = []
    for (let a of integers) {
        a % 2 == 0 ?
            evenArr.push(a) :
            oddArr.push(a)

    }
    if (evenArr.length === 1) {
        return evenArr[0]
    } else {
        return oddArr[0]
    }

}

findOutlier([160, 3, 1719, 19, 11, 13, -21])
findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])