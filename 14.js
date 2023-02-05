var maxSequence = function (arr) {
    let currSum = 0;
    let maxSumm = 0
    for (let endInd = 0; endInd < arr.length; endInd++) {
        currSum += arr[endInd]

        if (currSum > maxSumm) {
            maxSumm = currSum
        }
        if (currSum < 0) {
            currSum = 0
        }
    }

    return maxSumm

}


maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
maxSequence([])