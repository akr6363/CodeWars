function hamming(a, b) {
    let count = 0
    for (i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            count++
        }
    }
    console.log(count)
    return count
}

hamming("hello world", "hello tokyo")