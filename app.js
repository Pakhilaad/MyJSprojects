const colors = ["red", "blue", "aqua", "green", "#00FF00", "rgba(255,0,255)"];

// const btn = document.getElementById('btn');
// const color = document.querySelector('.color');

// btn.addEventListener('click', function() {
//     const randomNumber = getRandomNUmber();
//     console.log(randomNumber);
//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent = colors[randomNumber];
// });

// function getRandomNUmber() {
//     return Math.floor(Math.random() * colors.length);
// }

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {

    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}