let choices = document.querySelectorAll(".imgDiv");

const choosen = (choicesId) => {
    console.log("You from choosen: " + choicesId);

    let random = Math.floor(Math.random() * 3);
    let compChoice = choices[random].getAttribute("id");
    console.log("Comp from choosen: " + compChoice);
    return compChoice;
}


const winner = (choicesId, compChoose) => {
    if (choicesId === compChoose) {
        scoreDraw.innerText++;
        alert("Draw!");
        return;
    } else {
        if (choicesId === "rock" && compChoose === "scissor") {
            scoreUser.innerText++;
            alert("You WIN as " + choicesId);

            return;
        } else if (choicesId === "paper" && compChoose === "rock") {
            scoreUser.innerText++;
            alert("You WIN as " + choicesId);
            return;
        } else if (choicesId === "scissor" && compChoose === "paper") {
            scoreUser.innerText++;
            alert("You WIN as " + choicesId);
        } else if (choicesId === "rock" && compChoose === "paper") {
            scoreComp.innerText++;
            alert("YOU LOOSE with " + choicesId);
        }
        else if (choicesId === "paper" && compChoose === "scissor") {
            scoreComp.innerText++;
            alert("YOU LOOSE with " + choicesId);

        } else if (choicesId === "scissor" && compChoose === "rock") {
            scoreComp.innerText++;
            alert("YOU LOOSE with " + choicesId);
        }
    }
}

let resultuser = document.querySelector("#you");
let resultComp = document.querySelector("#comp");
let userText = resultuser.innerText;
let compText = resultComp.innerText;


let scoreUser = document.querySelector("#yourScore");
let scoreComp = document.querySelector("#compScore");
let scoreDraw = document.querySelector("#draw");
choices.forEach(choice => {
    let choicesId = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        resultuser.innerText = userText + " " + choicesId.toUpperCase();
        let compChoose = choosen(choicesId);
        resultComp.innerText = compText + " " + compChoose.toUpperCase();
        setTimeout(() => {
            winner(choicesId, compChoose);

        }, 10);
    });

});

const reset = () => {
    scoreComp.innerText = "0";
    scoreDraw.innerText = "0";
    scoreUser.innerText = "0";
    resultComp.innerText=compText;
    resultuser.innerText=userText;
    console.log('reset');
}

let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click",()=>{
    reset();
})