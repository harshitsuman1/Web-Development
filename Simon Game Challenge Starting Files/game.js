let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
function newSequence()
{
    let rand = Math.floor(Math.random() * 3);
    let randomChosenColour = buttonColors[rand];
    gamePattern.push(randomChosenColour);
}
$("#randomChosenColour").fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
$("#randomChosenColour").click(function () {
    sound(randomChosenColour);
})
let audio;
function sound(clr) {
    switch (clr) {
    case "red":
        audio = new Audio("./sounds/red.mp3")
        audio.play();
        break;
    case "blue":
        audio = new Audio("./sounds/blue.mp3")
        audio.play();
        break;
    case "green":
        audio = new Audio("./sounds/green.mp3")
        audio.play();
        break;
    case "yellow":
        audio = new Audio("./sounds/yellow.mp3")
        audio.play();
        break;
    default:
        audio = new Audio("./sounds/wrong.mp3")
        audio.play();
        break;
}
}