// fetch the elements into DOM

let heading = document.querySelector(".heading");
let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");
let rollBtn = document.querySelector(".btn");

// create function that rolls the dices

function rollDices(){
    let randomNum = Math.floor(Math.random() * 6) + 1;
    let newPath = `/images/dice${randomNum}.png`;

    let randomNum2 = Math.floor(Math.random() * 6) + 1;
    let newPath2 = `/images/dice${randomNum2}.png`;

    if(randomNum > randomNum2){
        heading.innerHTML = `Player 1 wins😎`
    } else if(randomNum2 > randomNum){
        heading.innerHTML = `Player 2 wins😎`
    } else {
        heading.innerHTML = `Ohh! it's a tie=🐳`
    }

    image1.setAttribute("src", newPath);
    image2.setAttribute("src", newPath2)
}

// event that triggers the dices when button is clicked

rollBtn.addEventListener("click", rollDices);