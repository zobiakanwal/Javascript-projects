const button = document.querySelector('button');
const body = document.querySelector('body');

let color = ['red', 'yellow', 'blue', 'green'];

body.style.backgroundColor = "pink";

button.addEventListener('click', changeBG);

function changeBG(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
}