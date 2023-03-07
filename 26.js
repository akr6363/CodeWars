// function prod2sum(a, b, c, d) {
//     let result = (a ** 2 + b ** 2) * (c ** 2 + d ** 2)
//     let resArr = []
//     for (let x = 1; x < Math.sqrt(result); x++) {
//         for (let y = 1; y < Math.sqrt(result); y++) {

//             if (x ** 2 + y ** 2 === result) {
//                 if (!(resArr.some(el => el[0] + el[1] === x + y))) {
//                     let subArr = [x, y].sort((x, y) => x - y)
//                     resArr.push(subArr)
//                 }
//             }
//         }
//     }
//     console.log(resArr)
//     return resArr
// }

function prod2sum() {
    let result = 69173
    let resArr = []
    for (let x = 1; x < Math.sqrt(result); x++) {
        for (let y = 1; y < Math.sqrt(result); y++) {

            if (x ** 2 + y ** 2 === result) {
                if (!(resArr.some(el => el[0] + el[1] === x + y)) && resArr.length < 2) {
                    let subArr = [x, y].sort((x, y) => x - y)
                    resArr.push(subArr)
                }
            }
        }
    }
    console.log(resArr)
    return resArr
}


// prod2sum(1, 2, 1, 3)

prod2sum(2, 3, 4, 5)

console.log(103 ** 2 + 242 ** 2)

console.log(2 ** 2 + 263 ** 2)
console.log(23 ** 2 + 262 ** 2)
console.log(122 ** 2 + 233 ** 2)