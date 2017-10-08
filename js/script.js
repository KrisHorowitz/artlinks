
var $win = $(window),
    w = 0,h = 0,
    rgb = [],
    red, green, blue,
    getWidth = function() {
        w = $win.width();
        h = $win.height();
    };

var zeroPad = function(hexString) {
    switch (hexString.length) {
        case 0:
            hexString = "00";
            break;
        case 1:
            hexString = "0" + hexString;
            break;
    }
    return hexString;
}

$win.resize(getWidth).mousemove(function(e) {
    var CONST_BLUE = 150;
    console.log(Math.round(e.pageX/w * 175));
    red = Math.round(e.pageX/w * 175).toString(16);
    green = Math.round(e.pageY/h * 175).toString(16);
    blue = CONST_BLUE.toString(16);
    rgb = [
        zeroPad(red),
        zeroPad(green),
        zeroPad(blue)
    ];
}).resize();
