function solution(roman) {
    let num = roman.split('').map(el => {
        switch (el) {
            case 'I':
                return 1
            case 'V':
                return 5
            case 'X':
                return 10
            case 'L':
                return 50
            case 'C':
                return 100
            case 'D':
                return 500
            case 'M':
                return 1000
        }
    })

    for (i = 0; i < num.length; i++) {
        if (num[i] < num[i + 1]) {
            let newNum = num[i + 1] - num[i]
            num.splice(i, 2, newNum)
        }
    }

    let summ = num.reduce((a, b) => {
        return a + b
    }, 0)
    console.log(num)
    console.log(summ)

    // return summ
}

solution('MDCLXVI')
solution('IV')
