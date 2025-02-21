//Javascript code to allow music to play once in this page -->
//User interacted with last page(index.html -> clicked on button) which now lifts autplay restrictions and lets audio page bc browsers track user gestures(clicks, taps, keyboards events)-->


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

