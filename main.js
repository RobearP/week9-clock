const secondsHand = document.getElementsByClassName("hand");
const minuteHand = document.getElementsByClassName("minute-hand");
const hourHand = document.getElementsByClassName("hour-hand");

//PLAN
//create a function loop (infinite) to move hand every 1 second
function rotate(){
    let seconds = 6;
    secondsHand.style.rotate = `90deg`
}
setTimeout(rotate, 1000)

/*document.addEventListener("load", function(){
    console.log("hello world")
    let handRotation = setInterval(rotate, 1000)
}) */

//  setInterval time = 1 second (1000)
//  rotate hand clockwise 6degrees each loop (360 / 60 = 6)
//  let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
// hand.style.transform = `rotate(90deg)`; //:mag: HINT: THis is an example of how to rotate the hand!
// moveSecondHand();