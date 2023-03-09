function swap(string) {

    const vowelLetters = ['a', 'e', 'i', 'o', 'u']

    let res = string.split('').map(letter => {
        return vowelLetters.includes(letter.toLowerCase())
            ? letter.toUpperCase() : letter
    })
    return res.join('');
}
console.log(swap("HelloWorld!"))


//  "HEllOWOrld!"