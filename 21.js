// function pigIt(str) {
//     const marks = [',', '.', '!', '?', ';', ':', '()']
//     let str2 = str.split(' ').map(el => {
//         if (marks.includes(el)) {
//             return el
//         }
//         let strArr = el.split('')
//         let firstLetter = strArr.shift(1)
//         strArr.push(firstLetter, 'ay')
//         return strArr.join('')
//     })

//     console.log(str2.join(' '))
//     return str2.join(' ')
// }

function pigIt(str) {
    return str
        .split(' ')
        .map(el => el.match(/[a-z]/i) ? el.slice(1) + el.charAt(0) + 'ay' : el)
        .join(' ')
}
console.log(pigIt('Hello world !'))
pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay'

pigIt('Hello world !')