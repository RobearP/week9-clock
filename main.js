const secondHand = document.querySelector(".hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

//PLAN
//create a function loop (infinite) to move hand every 1 second
function rotate(){
    const newDate = new Date();
    const seconds = newDate.getSeconds();
    const minutes = newDate.getMinutes();
    const hours = newDate.getHours();
    let secondsCurrent = 6*seconds;
    let minutesCurrent = 6*minutes;
    let hoursCurrent = 30*hours;
    secondHand.style.rotate = `${secondsCurrent}deg`;
    minuteHand.style.rotate = `${minutesCurrent}deg`;
    hourHand.style.rotate = `${hoursCurrent}deg`;
    // const secondTimer = setInterval(function() {
    //     secondsCurrent += 6;
    //     secondHand.style.rotate = `${secondsCurrent}deg`;
    // }, 1000);
    // const minuteTimer = setInterval(function () {
    //     minutesCurrent += 6;
    //     minuteHand.style.rotate = `${minutesCurrent}deg`;
    // }, 60000);
    // const hourTimer = setInterval(function () {
    //     hoursCurrent += 30;
    //     hourHand.style.rotate = `${hoursCurrent}deg`;
    // }, 360000);
    
}

setInterval(rotate, 1000);
// document.addEventListener("load", function () {
//     const clock = setInterval(rotate(), 1000);
// })

/*document.addEventListener("load", function(){
    console.log("hello world")
    let handRotation = setInterval(rotate, 1000)
}) */

//  setInterval time = 1 second (1000)
//  rotate hand clockwise 6degrees each loop (360 / 60 = 6)
//  let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
// hand.style.transform = `rotate(90deg)`; //:mag: HINT: THis is an example of how to rotate the hand!
// moveSecondHand();