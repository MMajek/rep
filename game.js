let dragonBody = document.querySelector("#svg_container");
dragonBody.style.left = 650;
let movement = 20;

window.addEventListener('keydown', (e) => 
{
    switch(e.key) 
    {
        case 'ArrowLeft':
            dragonBody.style.left = parseInt(dragonBody.style.left) - movement + 'px' ;
            break;
        case 'ArrowRight':
            dragonBody.style.left = parseInt(dragonBody.style.left) + movement + 'px' ;
            break;
    }
})
const max_health=  100 ;
let choice = '';
let overallHealthBar = document.querySelector("#overall-health");
let feedBar = document.querySelector("#health_01");
let playBar = document.querySelector("#health_02");
let drinkBar = document.querySelector("#health_03");
let sleepBar = document.querySelector("#health_04");
feedBar.style.width = `10%`;
playBar.style.width = '0%';
drinkBar.style.width = '20%';
sleepBar.style.width = '80%';
const feedBtn = document.getElementById("feedButton").addEventListener("click", increaseWidth);
const drinkBtn = document.getElementById("drinkButton").addEventListener("click", increaseWidth_2);
const playBtn = document.getElementById("playButton").addEventListener("click", increaseWidth_3);
const sleepBtn = document.getElementById("sleepButton").addEventListener("click", increaseWidth_4);

const gradient = 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.5) 100%)';

function calcOverallHealth() {
    let overallHealth = `${(parseInt(feedBar.style.width) + parseInt(drinkBar.style.width) + parseInt(playBar.style.width) + parseInt(sleepBar.style.width)) / 4}`;
    overallHealthBar.style.width =`${overallHealth}%`;
    overallHealthBar.style.backgroundColor = level(parseInt(overallHealthBar.style.width));
    overallHealthBar.style.backgroundImage = gradient;
    overallHealthBar.innerText = `${parseInt(overallHealth)}%`;
}

function increaseWidth() {
    if (parseInt(feedBar.style.width) >= max_health ) {console.log("cant")}
    else {
        feedBar.style.width = `${parseInt(feedBar.style.width) + 10}%`;
        feedBar.style.backgroundColor = level(parseInt(feedBar.style.width));
        feedBar.style.backgroundImage = gradient;
        feedBar.innerText = `${parseInt(feedBar.style.width)}%`;
        console.log(parseInt(feedBar.style.width));
        calcOverallHealth();
    }
}
function increaseWidth_2() {
    if (parseInt(drinkBar.style.width) >= max_health ) {console.log("cant")}
    else {
        drinkBar.style.width = `${parseInt(drinkBar.style.width) + 10}%`;
        drinkBar.style.backgroundColor = level(parseInt(drinkBar.style.width));
        drinkBar.style.backgroundImage = gradient;
        drinkBar.innerText = `${parseInt(drinkBar.style.width)}%`;
        console.log(parseInt(drinkBar.style.width));
        calcOverallHealth();
    }
}
function increaseWidth_3() {
    if (parseInt(playBar.style.width) >= max_health ) {console.log("cant")}
    else {
        playBar.style.width = `${parseInt(playBar.style.width) + 10}%`;
        playBar.style.backgroundColor = level(parseInt(playBar.style.width));
        playBar.style.backgroundImage = gradient;
        playBar.innerText = `${parseInt(playBar.style.width)}%`;
        console.log(parseInt(playBar.style.width));
        calcOverallHealth();
    }
}
function increaseWidth_4() {
    if (parseInt(sleepBar.style.width) >= max_health ) {console.log("cant")}
    else {
        sleepBar.style.width = `${parseInt(sleepBar.style.width) + 10}%`;
        sleepBar.style.backgroundColor = level(parseInt(sleepBar.style.width));
        sleepBar.style.backgroundImage = gradient;
        sleepBar.innerText = `${parseInt(sleepBar.style.width)}%`;
        console.log(parseInt(sleepBar.style.width));
        calcOverallHealth();
    }
}

function level(health_value) {
    if (health_value <= 40)
    {
        choice = "rgb(255, 66, 66)";
    }
    else if (health_value < 70 && health_value > 40)
    {
        choice = "orange";
    }
    else if ( health_value >=70 )
    {
            choice = "rgb(6, 228, 6)";
    }

    return choice;
}






