
let dragonBody = document.querySelector("#svg_container");
dragonBody.style.left = 650;
let movement = 20;
const createdTime = new Date();
const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const created_date = `${days[createdTime.getDay()]} ${createdTime.getDate()} ${months[createdTime.getMonth()]} ${createdTime.getFullYear()}`;
let age = 0;

//console.log(moment());
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
playBar.style.width = '50%';
drinkBar.style.width = '30%';
sleepBar.style.width = '70%';
const feedBtn = document.getElementById("feedButton")
feedBtn.addEventListener("click", increaseWidth);
const drinkBtn = document.getElementById("drinkButton")
drinkBtn.addEventListener("click", increaseWidth_2);
const playBtn = document.getElementById("playButton")
playBtn.addEventListener("click", increaseWidth_3);
const sleepBtn = document.getElementById("sleepButton")
sleepBtn.addEventListener("click", increaseWidth_4);
const gradient = 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.5) 100%)';

function calcOverallHealth() {
    let overallHealth = `${(parseInt(feedBar.style.width) + parseInt(drinkBar.style.width) + parseInt(playBar.style.width) + parseInt(sleepBar.style.width)) / 4}`;
    overallHealthBar.style.width =`${overallHealth}%`;
    overallHealthBar.style.backgroundColor = level(parseInt(overallHealthBar.style.width));
    overallHealthBar.style.backgroundImage = gradient;
    overallHealthBar.innerText = `${parseInt(overallHealth)}%`;
}

function increaseWidth() {
    if (parseInt(feedBar.style.width) >= max_health ) {
        feedBar.style.width = `${parseInt(feedBar.style.width) - 50}%`;
        feedBar.style.backgroundColor = level(parseInt(feedBar.style.width));
        feedBar.style.backgroundImage = gradient;
        feedBar.innerText = `${parseInt(feedBar.style.width)}%`;
        console.log(parseInt(feedBar.style.width));
        calcOverallHealth();
    }
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
    if (parseInt(drinkBar.style.width) >= max_health ) {
        drinkBar.style.width = `${parseInt(drinkBar.style.width) - 35}%`;
        drinkBar.style.backgroundColor = level(parseInt(drinkBar.style.width));
        drinkBar.style.backgroundImage = gradient;
        drinkBar.innerText = `${parseInt(drinkBar.style.width)}%`;
        console.log(parseInt(drinkBar.style.width));
        calcOverallHealth();
    }
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
    if (parseInt(playBar.style.width) >= max_health ) {
        playBar.style.width = `${parseInt(playBar.style.width) - 20}%`;
        playBar.style.backgroundColor = level(parseInt(playBar.style.width));
        playBar.style.backgroundImage = gradient;
        playBar.innerText = `${parseInt(playBar.style.width)}%`;
        console.log(parseInt(playBar.style.width));
        calcOverallHealth();
    }
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
    if (parseInt(sleepBar.style.width) == max_health ) {
        sleepBar.style.width = `${parseInt(sleepBar.style.width) - 40}%`;
        sleepBar.style.backgroundColor = level(parseInt(sleepBar.style.width));
        sleepBar.style.backgroundImage = gradient;
        sleepBar.innerText = `${parseInt(sleepBar.style.width)}%`;
        console.log(parseInt(sleepBar.style.width));
calcOverallHealth();
    }
    else {
        sleepBar.style.width = `${parseInt(sleepBar.style.width) + 10}%`;
        sleepBar.style.backgroundColor = level(parseInt(sleepBar.style.width));
        sleepBar.style.backgroundImage = gradient;
        sleepBar.innerText = `${parseInt(sleepBar.style.width)}%`;
        console.log(parseInt(sleepBar.style.width));
        calcOverallHealth();
    }
}

// decrease health categories overtime
function overtimeDecreaseFoodHealth() {
    feedBar.style.width = `${parseInt(feedBar.style.width) - 5}%`;
    feedBar.style.backgroundColor = level(parseInt(feedBar.style.width));
    feedBar.style.backgroundImage = gradient;
    feedBar.innerText = `${parseInt(feedBar.style.width)}%`;
    console.log(parseInt(feedBar.style.width));
    calcOverallHealth();
}
function overtimerDecreasePlayHealth() {
    drinkBar.style.width = `${parseInt(drinkBar.style.width) - 10}%`;
    drinkBar.style.backgroundColor = level(parseInt(drinkBar.style.width));
    drinkBar.style.backgroundImage = gradient;
    drinkBar.innerText = `${parseInt(drinkBar.style.width)}%`;
    console.log(parseInt(drinkBar.style.width));
    calcOverallHealth();
}
function overtimeDecreaseHydrationHealth() {
    drinkBar.style.width = `${parseInt(drinkBar.style.width) - 20}%`;
    drinkBar.style.backgroundColor = level(parseInt(drinkBar.style.width));
    drinkBar.style.backgroundImage = gradient;
    drinkBar.innerText = `${parseInt(drinkBar.style.width)}%`;
    console.log(parseInt(drinkBar.style.width));
    calcOverallHealth();
}
function overtimeDecreaseSleepHealth() {
    sleepBar.style.width = `${parseInt(sleepBar.style.width) - 10}%`;
    sleepBar.style.backgroundColor = level(parseInt(sleepBar.style.width));
    sleepBar.style.backgroundImage = gradient;
    sleepBar.innerText = `${parseInt(sleepBar.style.width)}%`;
    console.log(parseInt(sleepBar.style.width));
}
setInterval(overtimeDecreaseFoodHealth, 210000); //every 3.5 minutes.
setInterval(overtimerDecreasePlayHealth, 300000); // every 5 minutes.
setInterval(overtimeDecreaseHydrationHealth, 180000);//  every 3 minutes.
setInterval(overtimeDecreaseSleepHealth, 720000); //every 12 minutes.


function level(health_value) {
    if (health_value <= 49)
    {
        choice = "rgb(255, 66, 66)";
    }
    else if (health_value < 70 && health_value > 49)
    {
        choice = "orange";
    }
    else if ( health_value >=70 )
    {
            choice = "rgb(6, 228, 6)";
    }

    return choice;
}

const drag_name = document.querySelector("#name_param");
const drag_age = document.querySelector("#age_param");
const drag_color = document.querySelector("#skin_param");
const drag_dob = document.querySelector("#dob_param");
drag_dob.innerHTML = `DOB:  ${created_date}`;

function updateAge() {
    drag_age.innerHTML = `Age: ${age++}`
    if (age == 5) {
        // increase dragon size
    }
};
setInterval(updateAge, 210000); // ages every 3 minutes.