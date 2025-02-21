//Javascript code to allow music to play once in this page -->
//User interacted with last page(index.html -> clicked on button) which now lifts autplay restrictions and lets audio page bc browsers track user gestures(clicks, taps, keyboards events)-->
//Only worked for Arc and Google chrome on desktop and not for mobile or safari desktop, will have to change it

//if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    //alert("click screen after pressing ok for a suprise! 🎶");
//}

//alert("On mobile click screen after pressing ok for a suprise!")


// Detect if the user is on a mobile device more accurately
//const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.navigator.maxTouchPoints == 0;

// Detect if the user is on a mobile device
const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// Detect if the user is on Safari (desktop or mobile)
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// If user is on mobile, show the alert
if (isMobile || isSafari) {
    alert("Click the screen after pressing OK for a surprise! 🎶");
}

//document reps whole webpage then waits for user to registar a click on page then triggers code inside 
document.addEventListener("click", function() {
    //finds <audio> element in html with id="background-music" and stores in audio variable
    let audio = document.getElementById("background-music");

    //checks if the audio is paused
    if (audio.paused) {
        //if its paused then we play. If it doesnt play we have failsafe to handle errors in case browser blocks autoplay
        audio.play().catch(error => console.log("Autoplay blocked:", error));
    }
  }, { once: true }); // Ensures it runs only once


