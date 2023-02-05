function inArray(array1, array2) {
    let newArr = []
    for (let el1 of array1) {
        for (let el2 of array2) {
            if (el2.includes(el1) && !newArr.includes(el1)) {
                newArr.push(el1)
            }
        }
    }
    newArr.sort((a, b) => a > b ? 1 : -1)
    return newArr
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["live", "strong", "arp"]

let a4 = ['he', '1.9', 'ect', 'pini', 'gla']
let a3 = ['browse', 'reference', 'I', 'perfect', '1.9 ?', 'Ruby', 'to', 'the', 'versioning;', 'am', 'most', 'updated', 'I', 'that', 'input', 'have', 'you', 'for', 'apidock', 'is', '1.9.2.', 'a', 'sample;']

inArray(a4, a3)