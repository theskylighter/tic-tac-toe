console.log("hello");
// let bdy=document.querySelector("body");


let boxes=document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// player0 ki turn
let turn0 =true; 
let currSymbol="X";

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
];


const resetGame= () => {
    console.log("reset game function called");
    turn0=true;
    currSymbol="X";
    enableBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("buttonwasclicked");
        // if(tileModified!=true){
            
        if(turn0){
            box.innerText=`${currSymbol}`;
            turn0=false;
            currSymbol="O";
        }
        else{
            box.innerText=`${currSymbol}`;
            turn0=true;
            currSymbol="X";
        }

        box.disabled = true;
        checkWinner();
    })        
});

const disableTiles =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

// SHOW THE WINNER
const showWinner = (pos1Val) => {
    msg.innerText=`Congratulations, Winner is ${pos1Val} !!!`;
    msgcontainer.classList.remove("hide");
    disableTiles();    
};;

const checkWinner= ()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        // console.log(pos1Val,pos2Val,pos3Val);
        
        if(pos1Val!="" &&pos2Val!="" &&pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("winner found!",pos1Val);
                showWinner(pos1Val);
                return true;
            }
        }
    }        
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);




