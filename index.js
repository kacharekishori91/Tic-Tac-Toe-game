// const res = require("express/lib/response");

let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#newbtn");
let msgContainer=document.querySelector(".messagecontainer");
let msg=document.querySelector("#message");
let turn0 = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (turn0) {
      box.style.color="red";
      box.innerText = "O";
      turn0 = false;
    } else {
      box.style.color="black";
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWin();
  });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    console.log('Congratulations'+winner)
    msg.innerText=`Congratulations, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes(); 
}

const checkWin = () => {
  for (let pattern of winPattern) {
    let pos1value = boxes[pattern[0]].innerText;
    let pos2value = boxes[pattern[1]].innerText;
    let post3value =boxes[pattern[2]].innerText;

    if (pos1value != "" && pos2value != "" && post3value != "") {
      if (pos1value == pos2value && pos2value == post3value) {
      console.log("Winner!!",pos1value)
      showWinner(pos1value);
      }
    }
  }
};

newGameBtn.addEventListener("click",resetGame);


