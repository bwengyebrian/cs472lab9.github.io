window.onload = start ;

function start() {

    var timer;
    var startBtn = document.getElementById('start');
    var animation = document.getElementById('animation');
    var fontSize = document.getElementById('fontsize');
    var start = document.getElementById('start')
    var stop = document.getElementById('stop');
    var fontSizes = [];
    fontSizes['Tiny'] =  '7pt' ;
    fontSizes['Small'] =  '10pt' ;
    fontSizes['Medium'] =  '12pt' ;
    fontSizes['Large'] =  '16pt' ;
    fontSizes['Extra Large'] =  '24pt' ;
    fontSizes['XXL'] =  '32pt' ;
    var timeOut;

    var animate = function () {
        start.disabled = "disabled";
        stop.disabled = "";
        var turbo = document.getElementById('turbo');
        if(turbo.checked){
            timeOut = 50;
        }
        else {
            timeOut = 250;
        }

        document.getElementById('text-area').style.fontSize =fontSizes[fontSize.value];
        var flames =  ANIMATIONS[animation.value].split("=====\n");
        var curFlame = 0;
        timer = window.setInterval(function () {
            document.getElementById('text-area').value = flames[curFlame++];
            if(curFlame == flames.length){
                curFlame = 0;
            }
        },timeOut);

        
    }
    start.onclick = animate
    stop.onclick = function () {
        window.clearInterval(timer);
        start.disabled = "";
        stop.disabled = "disabled";
    }
    document.getElementById('turbo').onchange =function () {
            if(start.disabled) {
                window.clearInterval(timer);
                animate();
            }


    }
}