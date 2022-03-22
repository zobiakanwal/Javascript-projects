const button = document.querySelector('button');
const body = document.querySelector('body');

let color = ['red', 'yellow', 'blue', 'green'];

body.style.backgroundColor = "pink";

button.addEventListener('click', changeBG);

function changeBG(){
    body.style.backgroundColor = color[2];
}