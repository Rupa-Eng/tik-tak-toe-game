let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector("#msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.style.pointerEvents = "none";
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msgContainer.classList.add("show"); // Show the winner message
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val); // Show the winner
                disableBoard(); // Disable the rest of the board
                return;
            }
        }
    }
};

const disableBoard = () => {
    boxes.forEach((box) => {
        box.style.pointerEvents = "none"; // Disable all clicks
    });
};

// Reset game button
resetbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "auto";
    });
    turnO = true;
    msgContainer.classList.remove("show"); // Hide the winner message
});
