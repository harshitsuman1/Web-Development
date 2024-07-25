let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
function newSequence()
{
    let rand = Math.floor(Math.random() * 3);
    let randomChosenColour = buttonColors[rand];
    gamePattern.push(randomChosenColour);
    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
    sound(randomChosenColour);
}
$(".btn").click(function () {
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    sound(userChosenColour);
    animatePress(userChosenColour);
})
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