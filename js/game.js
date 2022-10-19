//Sara Pereira up201906821
//Wide Putin Game

let character = document.querySelector("#character");
let block = document.querySelector("#block");
let gamekeys = document.querySelector("#gamekeys");
let gameOver = document.querySelector("#gameOver");

let waitForStart = setTimeout(function(){
    alert("Let's start the same shall we? Don't let wide putin hit, jump!");
}, 100);

//Function to make the character jump
function jump(){
    //Avoid spam glitches problem
    if (character.classList.contains("animate")){return}
    
    character.classList.add("animate");
    setTimeout(() => {
        character.classList.remove("animate")
    }, 500);
}

//Collision, if the block hits between 90-180px and my character's height os >= 200 game over
let youreDead = setInterval(function(){
    //Get properties to set collision
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<180 && blockLeft>90 && characterTop>=200){
        //Stop displaying contents when game over
        block.style.animation = "none";
        block.style.display = "none";
        //Display game over and wide putin video
        gameOver.style.display = "block";
        alert("You just hit wide putin, die!");
        window.open("https://www.youtube.com/watch?v=VQ7lKPSUc2g");
    };
}, 2);

gamekeys.addEventListener("keyup", jump);
