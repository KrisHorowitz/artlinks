var audio = document.getElementById("art-links-vivi");

// var isPlaying = false;

// function togglePlay() {
//   if (isPlaying) {
//     audio.pause()
//   } else {
//     audio.play();
//   }
// };
// audio.onplaying = function() {
//   isPlaying = true;
// };
// audio.onpause = function() {
//   isPlaying = false;
// };

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

// $(document).ready(function(){
//   $(audio)[0].volume = 0;
//   $audio.animate({volume: 1}, 3000);
// });

// function getSoundAndFadeAudio (audiosnippetId) {

//     var sound = document.getElementById(audiosnippetId);

//     // Set the point in playback that fadeout begins. This is for a 2 second fade out.
//     var fadePoint = sound.duration - 2;

//     var fadeAudio = setInterval(function () {

//         // Only fade if past the fade out point or not at zero already
//         if ((sound.currentTime >= fadePoint) && (sound.volume != 0.0)) {
//             sound.volume -= 0.1;
//         }
//         // When volume at zero stop all the intervalling
//         if (sound.volume === 0.0) {
//             clearInterval(fadeAudio);
//         }
//     }, 200);

// }