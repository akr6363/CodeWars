function isIsogram(str) {
    let str2 = str.toLowerCase()
    for (let i = 0; i < str2.length; i++) {
        if (str2.indexOf(str2[i]) !== str2.lastIndexOf(str2[i])) return false
    }
    return true
}

isIsogram("Dermatoglyphics")
isIsogram("aba")