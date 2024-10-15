const disableTiles = () => {
    for (let tile of tiles) {
        tile.disabled = true;
    }
};

const enableTiles = () => {
    for (let tile of tiles) {
        tile.innerText = "";
        tile.disabled = false;
    }
};

// could have created a NEW ELEMENT ALSO
// const createWinner = (pos1Val) => {
//     let div1 = document.createElement("div");
//     div1.innerText = `Winner is ${pos1Val} !!`;
//     document.querySelector(".container").append(div1);
// };

let newgamebtn = document.querySelector("#newgamebtn");
let resetbtn = document.querySelector("#resetbtn");

console.log(newgamebtn);
console.log(resetbtn);

const resetGame = () => {
    console.log("reset game function called");
    turn0 = true;
    currSymbol = "X";
    enableTiles();
    msgcontainer.classList.add("hide");
};

resetbtn.addEventListener("click", resetGame);
newgamebtn.addEventListener("click", resetGame);