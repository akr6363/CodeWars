function isIsogram(str) {
    let str2 = str.toLowerCase()
    for (let i = 0; i < str2.length; i++) {
        // console.log(str2.indexOf(str2[i]))
        // console.log(str2.lastIndexOf(str2[i]))
        if (str2.indexOf(str2[i]) !== str2.lastIndexOf(str2[i])) {
            console.log(false)
            return
        }
    }
    console.log(true)
}

isIsogram("Dermatoglyphics")
isIsogram("aba")