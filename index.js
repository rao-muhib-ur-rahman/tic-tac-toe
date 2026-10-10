let btns = document.querySelectorAll(".btn")

let winner = document.querySelector("#winner")

let turnO = true // turns

let resetBtn = document.querySelectorAll(".resetBtn")

let moves = 0

const winPat = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

// For disappling the btns

function boxDisabled() {
    for (let dis of btns) {
        dis.disabled = true
    }
}

// To reset the game

function resetGame() {
    for (let dis of btns) {
        dis.innerText = ""
        dis.disabled = false
    }
}

// To change the turn each time

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("The btn is clicked")
        if (turnO) {
            btn.innerText = "O"
            btn.style.color = "red";
            turnO = false
        } else {
            btn.innerText = "X"
            turnO = true
        }

        btn.disabled = true;

        moves++;

        winCheck()

        // Checking for drawn match

        if (moves === 9 && winner.innerText === ""){
            winner.innerText = "Drawn!"
            boxDisabled()
        }
    });

});

// Checking who is the winner

let winCheck = () => {
    for (let patt of winPat) {

        let pos1 = btns[patt[0]].innerText;
        let pos2 = btns[patt[1]].innerText;
        let pos3 = btns[patt[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner!", pos1)
                winner.innerText = pos1
                boxDisabled()
            }
        }

    }
}

resetBtn.forEach((btn) => {
    btn.addEventListener("click", resetGame)
})