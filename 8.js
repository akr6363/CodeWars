function validatePIN(pin) {

    if (pin.length !== 6 && pin.length !== 4) {
        console.log(false)
    }

    if (pin.indexOf(' ') !== -1) {
        console.log('sdfsd')
    }
    for (let el of pin) {
        if (el === ' ') {
            console.log(false)
            return false
        }
        if (isNaN(Number(el))) {
            console.log(false)
        }

    }
    console.log(true)
    // return true
}

console.log('1234'.indexOf(' '))


// validatePIN("1234")
// validatePIN("-1.234")
validatePIN('123 ')
// validatePIN("00000000")

// console.log(Number('a').toString())