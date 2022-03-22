const button = document.querySelector('button');
const body = document.querySelector('body');

let color = ['red', 'yellow', 'blue', 'green'];

body.style.backgroundColor = "pink";

button.addEventListener('click', changeBG);

function changeBG(){
    const colorIndex = parseInt(Math.random()*color.length);

    if (color[colorIndex] == "blue") {
        button.style.borderColor = "red";
    }
    else{
        button.style.borderColor = "blue";
    }

    body.style.backgroundColor = color[colorIndex];
}