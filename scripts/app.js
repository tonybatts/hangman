const puzzleEl = document.querySelector("#puzzle")
const remainingGuessesEl = document.querySelector("#guesses")
let game1

window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ""
    remainingGuessesEl.textContent = game1.statusMessage
    
    game1.puzzle.split("").forEach((letter) => {
        const puzzleLetterEl = document.createElement("span")
        puzzleLetterEl.textContent = letter
        puzzleEl.appendChild(puzzleLetterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle("2")
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector("#reset").addEventListener("click", startGame)

startGame()

