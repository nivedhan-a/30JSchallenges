const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);           //ES6 feature, we use this to pass "e" a value automatically for all key, instead of typing for all the specific keys
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);            //select key for that animation
    if (!audio) {                   //if no audio source is assigned nothing will happen 
        return;
    } else {
        audio.currentTime = 0;               //if we hold the button, it sould restart the sound from first
        audio.play();                        //else play the audio which has been assigned
        key.classList.add("playing");               //add class playing to html, it stays clicked, hence button is not unclicked
    }
}

window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");             //select all 9 keys
keys.forEach(key => key.addEventListener("transitionend", removeTransition));        //transition "end"

function removeTransition(e) {
    if (e.propertyName !== "transform") {               //use DOM viewer in chrome with console.log(e) and check propertyName transform to fire, 
        this.classList.remove("playing");
    }
}



/*basically when, the keys defined is pressed, 

<div data-key = "68" class = "key">     turns to
 
<div data-key = "68" class = "key playing">        this only lasts for few seconds based on how transition is defined on css*/    