let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let count = 0, level = 0;
function nextSequence()
{
    level++;
    $("h1").text(`Level ${level}`);
    let rand = Math.floor(Math.random() * 3);
    let randomChosenColour = buttonColors[rand];
    gamePattern.push(randomChosenColour);
    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
    sound(randomChosenColour);
    userClickedPattern = [];
}

$(".btn").click(function () {
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    sound(userChosenColour);
    animatePress(userChosenColour);
    checkSequence(userClickedPattern.length-1);
    if(count===0){
        gameOver();
    }
})
function gameOver(){
    sound("wrong");
    $("h1").text(`Game Over, Press Any Key To Restart`);
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over")
    }, 200);
    gamePattern = [];
    level = 0;
    count = 0;
}

function sound(clr) {
    let audio = new Audio(`./sounds/${clr}.mp3`)
    audio.play();
}

function animatePress(currentColour) {
    $(`#${currentColour}`).addClass("pressed");
    setTimeout(() => {
        $(`#${currentColour}`).removeClass("pressed")
    }, 100);
}

$(document).keypress(() => {
    count++;
    if(count==1)
        nextSequence();
})

function checkSequence(idx)
{
    if(gamePattern[idx]===userClickedPattern[idx])
    {
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(() => {
            nextSequence();
            }, 1000);
        }
    }
    else {
        gameOver();
    }
}