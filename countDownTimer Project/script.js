const startButtton = document.getElementById('startButton');
const timeInput = document.getElementById('timeInput');
const countdownDisplay = document.getElementById('countdownDisplay');

function startTimer(){
let valueInSeconds = parseInt(timeInput.value)

console.log(valueInSeconds)
if (isNaN(valueInSeconds)){
    countdownDisplay.innerText = 'Please enter a valid input'
    return
}
if (valueInSeconds <= 0){
    countdownDisplay.innerText = 'Please enter seconds greater than 0'
    return
}

const timer = setInterval(function(){
valueInSeconds--;
countdownDisplay.innerText = `Time remaining ${valueInSeconds} seconds`;

if (valueInSeconds <= 0){
    clearInterval(timer);
}

}, 1 * 1000)

}

startButtton.addEventListener('click',startTimer)