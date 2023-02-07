function a(n) {
    if (n % 2 !== 0) n = n - 1
    if (n < 4) return ''
    let length = 2 * n - 1
    let apple = ' '.repeat((length - 1) / 2) + 'A' + ' '.repeat((length - 1) / 2) + '\n'
    for (let i = 1; i <= (length - 2); i = i + 2) {
        let str = ''
        let spaces = ' '.repeat((length - i - 2) / 2)
        if (i === n - 1) {
            str = spaces + ('A ').repeat((i + 1) / 2) + 'A' + spaces + '\n'
        } else {
            str = spaces + 'A' + ' '.repeat(i) + 'A' + spaces
            if (i !== length - 2) {
                str += '\n'
            }
        }
        apple += str
    }
    console.log(apple)
    return apple

}

a(18)

