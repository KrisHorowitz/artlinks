

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

// function playAudio() {
//   audio.play();
// }

// function pauseAudio() {
//   audio.pause();
// }



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

var $win = $(window),
    w = 0,h = 0,
    rgb = [],
    getWidth = function() {
        w = $win.width();
        h = $win.height();
    };

var canvas, canvasCtx;
$(function() {
    canvas = document.getElementById("canvas");
    canvasCtx = canvas.getContext("2d");
});

$win.resize(getWidth).mousemove(function(e) {
    if (canvas === undefined || canvasCtx === undefined) return;
    var CONST_BLUE = 150;
    var red = Math.round(e.pageX/w * 175).toString(16);
    var green = Math.round(e.pageY/h * 175).toString(16);
    var blue = CONST_BLUE.toString(16);
    rgb = [
        red,
        green,
        blue
    ];
    var color = "#" + rgb.join('');
    $(document.body).css('background', color);
}).resize();
