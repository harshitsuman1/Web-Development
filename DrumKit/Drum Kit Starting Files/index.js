let btn = $('button');

//detecting mouse-click
for (let i = 0; i < btn.length; i++)
{
    btn[i].addEventListener('click', function (event) {
        console.log(event);
        keyTap(this.innerHTML);
        addAnimation(this.innerHTML);
    })
}
//detecting keyboard press
document.addEventListener('keydown', function (e) {
    keyTap(e.key);
    addAnimation(e.key);
});


function keyTap(key)
{
    switch (key) {
            case 'w':
                audio = new Audio("./sounds/tom-1.mp3")
                audio.play();
                break;
            case 'a':
                audio = new Audio("./sounds/tom-2.mp3")
                audio.play();
                break;
            case 's':
                audio = new Audio("./sounds/tom-3.mp3")
                audio.play();
                break;
            case 'd':
                audio = new Audio("./sounds/tom-4.mp3")
                audio.play();
                break;
            case 'j':
                audio = new Audio("./sounds/crash.mp3")
                audio.play();
                break;
            case 'k':
                audio = new Audio("./sounds/kick-bass.mp3")
                audio.play();
                break;
            case 'l':
                audio = new Audio("./sounds/snare.mp3")
                audio.play();
                break;
        }
}

function addAnimation(key) {
    let active = document.querySelector('.' + key);
    active.classList.add("pressed");
    setTimeout(() => {
        active.classList.remove("pressed");
    }, 100);
}
