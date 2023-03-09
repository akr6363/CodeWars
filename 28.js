function nerdify(txt) {
    let res = txt.split('').map(letter => {
        if (letter.toUpperCase() === 'A') {
            return 4
        } else if (letter.toUpperCase() === 'E') {
            return 3
        } else if (letter === 'l') {
            return 1
        } else {
            return letter
        }
    })
    return res.join('')
}

console.log(nerdify("Los Angeles"))