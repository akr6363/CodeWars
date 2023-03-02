// function findSmallestTransaction(transactions) {
//     let minTransaction = Number.NEGATIVE_INFINITY
//     for (i = 0; i < transactions.length; i++) {
//         minTransaction = Math.max(transactions[i], minTransaction)
//     }
//     return minTransaction
// }


// console.log(findSmallestTransaction([-1000, -100, -10, -1]))
// // ----------------------------------------------------------------------------------------

// function findBestStudentMistakes(students) {
//     let minNumber = students[0]
//     for (i = 1; i < students.length; i++) {
//         minNumber = Math.min(students[i], minNumber)
//     }
//     return minNumber
// }

// console.log(findBestStudentMistakes([9, 4, 1, 8, 7, 13, 6, 5]))

// // ---------------------------------------------------------

// function findMaxNumber(arr, topBoundary) {
//     let currentMax = Number.MIN_VALUE
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < topBoundary) {
//             currentMax = Math.max(currentMax, arr[i])
//         }
//     }
//     return currentMax
// }
// function findTopElements(arr, numberOfElements) {
//     let topElements = new Array(numberOfElements)
//     let previousMax = Number.MAX_VALUE

//     for (let i = 0; i < numberOfElements; i++) {
//         let currentMax = findMaxNumber(arr, previousMax)
//         previousMax = currentMax
//         topElements[i] = currentMax
//     }
//     return topElements
// }

// let arr = [9, 4, 1, 8, 7, 13, 6, 5]

// console.log(findTopElements(arr, 5))

// // ---------------------------------------------------------

// // ---------------------------------------------------------
// function findMostProfitableClient(income) {
//     let arrSumm = income.map(arr => arr.reduce((a, b) => a + b, 0) / arr.length)
//     let max = arrSumm[0]
//     for (i = 1; i < arrSumm.length; i++) {
//         max = Math.max(arrSumm[i], max)
//     }
//     return arrSumm.indexOf(max)
// }

// let arr2 = [
//     [95, 67, 13, 55, 44, 11, 10], // Доходы от первого заказчика
//     [7, 190, 4, 44, 11, 1, 99], // Доходы от второго заказчика
//     [0, 5, -1, 500, 14, 90, 1], // Доходы от третьего заказчика
// ];

// console.log(findMostProfitableClient(arr2))

// let arr3 = [1, 2, 3]

// console.log(arr3.reduce((a, b) => a + b, 'd'))



function findAverageTime(times) {

    return (times.reduce((a, b) => a + b, 0) / times.length).toPrecision(3)
}
// console.log(findAverageTime([9, 4, 1, 8, 7, 9, 4, 1, 8, 7, 8, 7, 18, 3, 13, 6, 5]))

console.log(findAverageTime([9999]))