// const button = document.getElementById('nameButton');
const input = document.querySelector('#nameInput');
input.addEventListener('input', () => {
    const inputValues = input.value;
    let trialValue = inputValues.split(' ')
    let trailLength = inputValues.split('').length;
    if (trailLength <= 6 ) {
        const errorSpace = document.getElementById('error-msg');
        errorSpace.innerHTML = 'Name Must Be More Than 6 Characters.'
        errorSpace.style = 'color: red; left: 34%;'
        input.style = 'border: 2px solid red;'
    } else if (trialValue.length >  1 ){
        const errorSpace = document.getElementById('error-msg');
        errorSpace.innerHTML = 'Name Can\'t Have Any Spaces.';
        errorSpace.style = 'color: red; left: 38%;'
        input.style = 'border: 2px solid red;'
    }
    else if (trialValue.length = 1 && trailLength > 6 ) {
        const errorSpace = document.getElementById('error-msg');
        errorSpace.innerHTML = 'Valid.';
        errorSpace.style = 'color: lightgreen;'
        input.style = 'border: 2px solid lightgreen;'
    }
})
let name = "N/A";
const submit = document.querySelector("#nameButton");
submit.addEventListener('click', getName);
function getName() {
    localStorage.setItem('pet-name', input.value);    
}
// submitButton.addEventListener('click', () => {
//     const usernameInput = document.querySelector('#nameInput').value;
//     console.log(usernameInput);

// })

