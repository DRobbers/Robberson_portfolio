let clickAudio = new Audio('audio/Elevator.wav');


clickAudio.oncanplaythrough = function(){
clickAudio.play();
}

clickAudio.loop = true;

clickAudio.onended = function(){
clickAudio.play();
}



// <input type="image" src="http://button.png" onclick="clickAudio.play()">