export {dragonColor};
let dragonColor = "red";
function homeScript() {
    const homeBtn = document.querySelector('#homeButton');
    homeBtn.addEventListener('click', () => {
    // go to homepage;
})}

let color = document.querySelector('#dragon_01');
color.addEventListener('click', getColor);
let color2 = document.querySelector('#dragon_02');
color2.addEventListener('click', getColor2);
let color3 = document.querySelector('#dragon_03');
color3.addEventListener('click', getColor3);


function getColor() {
    dragonColor = "Green";
}
function getColor2() {
    dragonColor = "Red";
}
function getColor3() {
    dragonColor = "Purples";
}

