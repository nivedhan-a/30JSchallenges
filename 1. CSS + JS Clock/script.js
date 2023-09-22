const secondHand = document.querySelector(".sec-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");


function getTime() {
    const now = new Date();         //get the current time, seconds, minutes, hours
    const second = now.getSeconds();
    const secondDegree = ((second / 60) * 360) + 90;                 //90 is added because, we need to compenstate for 90 degree that has been used in transform in HTML
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const minute = now.getMinutes();
    const minuteDegree = ((minute / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour / 24) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}


setInterval(getTime, 1000);         //how much interval to run at