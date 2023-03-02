var snakesAndLadders = function (board, dice) {
    initialIndex = 1
    for (el of dice) {
        if (initialIndex + el <= board.length) {
            initialIndex += el
        }
        if (board[initialIndex - 1] !== 0) {
            if (initialIndex + board[initialIndex - 1] <= board.length) {
                initialIndex += board[initialIndex - 1]
            }
        }
        if (initialIndex === board.length) {
            console.log(initialIndex - 1)
            return initialIndex - 1
        }
    }
    console.log(initialIndex - 1)
    return initialIndex - 1;
}

var dice = [2, 1, 5, 1, 5, 4]
var board = [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]

snakesAndLadders(board, dice)