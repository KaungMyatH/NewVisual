function toggle(color) {
    var bulb1red = document.getElementById("b1Red");
    var bulb1green = document.getElementById("b1Green");
    var bulb1yellow = document.getElementById("b1Yellow");
    var bulb2red = document.getElementById("b2Red");
    var bulb2green = document.getElementById("b2Green");
    var bulb2yellow = document.getElementById("b2Yellow");


    if (color == "r") {

        bulb1red.classList.add("red");
        bulb1red.classList.remove("empty");
        bulb1green.classList.add("empty");
        bulb1yellow.classList.add("empty");

        bulb2green.classList.add("green");
        bulb2green.classList.remove("empty");
        bulb2red.classList.add("empty");
        bulb2yellow.classList.add("empty");

    } else if (color == "g") {

        bulb1green.classList.add("green");
        bulb1red.classList.add("empty");
        bulb1green.classList.remove("empty");
        bulb1yellow.classList.add("empty");

        bulb2red.classList.add("red");
        bulb2red.classList.remove("empty");
        bulb2green.classList.add("empty");
        bulb2yellow.classList.add("empty");


    } else if (color == 'y') {

        bulb1red.classList.add("empty");
        bulb1green.classList.add("empty");
        bulb1yellow.classList.add("yellow");
        bulb1yellow.classList.remove("empty");

        bulb2red.classList.add("red");
        bulb2red.classList.remove("empty");
        bulb2green.classList.add("empty");
        bulb2yellow.classList.add("empty");

    }
}



function Rtimer() {
    var rsec = 6;
    var ysec = 6;
    function rUpdateTime() {
        rsec--;
        ysec--;
        var b1Red = document.getElementById('b1Red');
        var b1Green = document.getElementById('b1Green');
        var b1Yellow = document.getElementById('b1Yellow');
        var b2Red = document.getElementById('b2Red');
        var b2Green = document.getElementById('b2Green');
        var b2Yellow = document.getElementById('b2Yellow');

        b1Red.classList.add("red");
        b1Red.innerText = rsec;

        b2Yellow.classList.add("yellow");
        b2Yellow.innerText= ysec;
        


        if (rsec < 1 && ysec <1 ) {
            b1Red.classList.remove("red");
            b1Red.innerText = 0;
            b1Green.classList.add("green");
            
            b2Yellow.classList.remove("yellow");
            b2Yellow.innerText=0;
            b2Red.classList.add("red");

            Gtimer();
            clearInterval(rinterval);
        }

    }
    rUpdateTime();
    var rinterval = setInterval(rUpdateTime, 1000);

}

function Gtimer() {
    var gsec = 6;
    var rsec = 6;


    function gUpdateTime() {
        rsec--;
        gsec--;

        var b1Red = document.getElementById('b1Red');
        var b1Green = document.getElementById('b1Green');
        var b1Yellow = document.getElementById('b1Yellow');
        var b2Red = document.getElementById('b2Red');
        var b2Green = document.getElementById('b2Green');
        var b2Yellow = document.getElementById('b2Yellow');

        b1Green.classList.add("green");
        b1Green.innerText = gsec;

        b2Red.classList.add("red");
        b2Red.innerText= rsec;

        if (gsec < 1 && rsec<1) {
            b1Green.classList.remove("green");
            b1Green.innerText = 0;
            b1Yellow.classList.add("yellow");

            b2Red.classList.remove("red");
            b2Red.innerText=0;
            b2Green.classList.add("green");

            Ytimer();
            clearInterval(ginterval);
        }
    }
    gUpdateTime();
    var ginterval = setInterval(gUpdateTime, 1000);
}

function Ytimer() {
    var ysec = 6;
    var gsec = 6;

    function yUpdateTime() {
        ysec--;
        gsec--;
    
        var b1Red = document.getElementById('b1Red');
        var b1Green = document.getElementById('b1Green');
        var b1Yellow = document.getElementById('b1Yellow');
        var b2Red = document.getElementById('b2Red');
        var b2Green = document.getElementById('b2Green');
        var b2Yellow = document.getElementById('b2Yellow');

        b1Yellow.classList.add("yellow");
        b1Yellow.innerText = ysec;

        b2Green.classList.add("green");
        b2Green.innerText=gsec;
        

        if (ysec < 1 && gsec<1) {
            b1Yellow.classList.remove("yellow");
            b1Yellow.innerText = 0;
            b1Red.classList.add("red");

            b2Green.classList.remove("green");
            b2Green.innerText=0;
            b2Yellow.classList.add("yellow");


            Rtimer();
            clearInterval(yinterval);
        }
    }
    yUpdateTime();
    var yinterval = setInterval(yUpdateTime, 1000);
}
