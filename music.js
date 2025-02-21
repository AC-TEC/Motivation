//Javascript code to allow music to play once in this page -->
//User interacted with last page(index.html -> clicked on button) which now lifts autplay restrictions and lets audio page bc browsers track user gestures(clicks, taps, keyboards events)-->
//Only worked for Arc and Google chrome on desktop and not for mobile, will have to change it

/*
// document reps whole webpage then waits for user to registar a click on page then triggers code inside 
document.addEventListener("click", function() {
    //finds <audio> element in html with id="background-music" and stores in audio variable
    const audio = document.getElementById("background-music");

    //checks if the audio is paused
    if (audio.paused) {
        //if its paused then we play. If it doesnt play we have failsafe to handle errors in case browser blocks autoplay
        audio.play().catch(error => console.log("Autoplay blocked:", error));
    }
  }, { once: true }); // Ensures it runs only once

*/



document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");

    // Check if we are on index.html or meme.html
    if (document.getElementById("enterButton")) {
        // We're on index.html
        document.getElementById("enterButton").addEventListener("click", function (event) {
            event.preventDefault(); // Prevent instant navigation

            // Try playing music before navigating
            audio.play().then(() => {
                console.log("Audio started playing before navigation!");
                
                // Store flag in sessionStorage so meme.html knows music has started
                sessionStorage.setItem("musicStarted", "true");

                // Delay navigation slightly to ensure Safari registers interaction
                setTimeout(() => {
                    window.location.href = "meme.html";
                }, 300);
            }).catch(error => {
                console.log("Autoplay blocked:", error);
                window.location.href = "meme.html"; // Navigate even if autoplay fails
            });
        });
    } else {
        // We're on meme.html
        if (sessionStorage.getItem("musicStarted") === "true") {
            console.log("Resuming music from last page interaction...");
            
            // Try playing immediately
            audio.play().catch(error => {
                console.log("Autoplay blocked on next page:", error);
            });
        }

        // Backup: Allow first click to start music if blocked
        document.addEventListener("click", function () {
            if (audio.paused) {
                audio.play().catch(error => console.log("Autoplay blocked on click:", error));
            }
        }, { once: true });
    }
});



