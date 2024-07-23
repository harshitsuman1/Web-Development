let randomNumber1 = 1 + Math.floor(Math.random() * 6);
let randomNumber2 = 1 + Math.floor(Math.random() * 6)

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

img1.setAttribute('src','./images/dice' + randomNumber1 + '.png')
img2.setAttribute('src','./images/dice' + randomNumber2 + '.png')

let h1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  h1.innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 === randomNumber2) {
  h1.innerHTML = "Draw!";
}
else h1.innerHTML = "Player 2 Wins";
