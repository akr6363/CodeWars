function generateHashtag(str) {
    let str2 = str.replace(/\s+/g, '');
    if (str2.length > 139 || str2.length < 1) {
        console.log(false)
        return false
    } else {
        return '#' + str.split(' ').filter(x => x !== '').map(el => el[0].toUpperCase() + el.slice(1)).join('')
    }

}

generateHashtag("Do We have A Hashtag")
generateHashtag("    Hello     World   ")
generateHashtag("     ")
generateHashtag("a".repeat(139))
generateHashtag("a".repeat(140))

