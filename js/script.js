
var $win = $(window),
    w = 0,h = 0,
    rgb = [],
    getWidth = function() {
        w = $win.width();
        h = $win.height();
    };

var canvas, canvasCtx;
$(function() {
    // canvas = document.getElementById("canvas");
    // canvasCtx = canvas.getContext("2d");
});

$win.resize(getWidth).mousemove(function(e) {
    // if (canvas === undefined || canvasCtx === undefined) return;
    // var CONST_BLUE = 150;
    // var red = Math.round(e.pageX/w * 175).toString(16);
    // var green = Math.round(e.pageY/h * 175).toString(16);
    // var blue = CONST_BLUE.toString(16);
    // rgb = [
    //     red,
    //     green,
    //     blue
    // ];
    // var color = "#" + rgb.join('');
    // $(document.body).css('background', color);
}).resize();
