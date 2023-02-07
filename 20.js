const RomanNumbersMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

function solution(roman) {
    let num = roman.split('').map(el => RomanNumbersMap[el])

    for (i = 0; i < num.length; i++) {
        if (num[i] < num[i + 1]) {
            let newNum = num[i + 1] - num[i]
            num.splice(i, 2, newNum)
        }
    }

    return num.reduce((a, b) => {
        return a + b
    }, 0)
}

console.log(solution('MDCLXVI'))
solution('MDCLXVI')
solution('IV')

