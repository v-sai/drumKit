var drumImageCount = document.querySelectorAll(".drum").length;
var sounds = ["sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3", "sounds/snare.mp3", "sounds/crash.mp3", "sounds/kick-bass.mp3"];
var imageLetters = ["w", "a", "s", "d", "j", "k", "l"];

for (var i = 0; i < drumImageCount; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    this.style.color = "white";
    letterChecker(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keypress",function(event){
  letterChecker(event.key);
  buttonAnimation(event.key)
});

function letterChecker(letter){
  for (var k = 0; k < drumImageCount; k++) {
    if (letter == imageLetters[k]) {
      var sound = new Audio(sounds[k]);
      sound.play();
    }
  }
}

function buttonAnimation(key){
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100); 
}
