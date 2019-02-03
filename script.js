const button = $("#btn");
//console.log('Button: ', button);

button.on("click", function() {
    //console.log('Click');
    //window.open("../WAS/WHS/index.html");
    window.open("./WHS/index.html");
});
////////////// Button Hover ////////////////////
button
    .on("mouseenter", function() {
        $(this).css({
            color: "whitesmoke",
            border: "solid whitesmoke 3px"
        });
    })
    .on("mouseleave", function() {
        var styles = {
            color: "greenyellow",
            border: "solid greenyellow 3px"
        };
        $(this).css(styles);
    });
//////////////////////////////////////////////////////
var img = $(".image");
var pictures = img.length;
var dots = [].slice.call(document.getElementsByClassName("dot"));

var timer;
var isTransitioning;

dots.forEach(function(dot, i) {
    dot.addEventListener("click", function() {
        if (this.classList.contains("current")) {
            return;
        }
        if (isTransitioning) {
            return;
        }
        clearTimeout(timer);
        next = i;
        moveImages();
    });
});

[].slice.call(img).forEach(function(image) {
    var touch;
    image.addEventListener("touchstart", function(e) {
        touch = {
            x: e.changedTouches[0].screenX,
            y: e.changedTouches[0].screenY
        };
        e.preventDefault();
    });
    image.addEventListener("touchend", function(e) {
        if (isTransitioning) {
            return;
        }
        var diffX = touch.x - e.changedTouches[0].screenX;
        var diffY = touch.y - e.changedTouches[0].screenY;
        if (Math.abs(diffY) > Math.abs(diffX)) {
            return;
        }
        if (diffX > 10) {
            clearTimeout(timer);
            moveImages();
        }
    });
});

var cur = 0,
    next = 1;

timer = setTimeout(moveImages, 2000);

function moveImages(n) {
    var curImg = img[cur];
    var nextImg = img[next];

    curImg.classList.remove("onscreen");
    curImg.classList.add("exit-stage-left");
    nextImg.classList.add("onscreen");

    setDot(next);

    cur = next;
    next = cur + 1;
    if (next >= pictures) {
        next = 0;
    }

    isTransitioning = true;
}

function transitionEnd(e) {
    if (!e.target.classList.contains("exit-stage-left")) {
        return;
    }
    e.target.classList.remove("exit-stage-left");
    timer = setTimeout(moveImages, 2000);
    isTransitioning = false;
}

document
    .getElementById("slider")
    .addEventListener("transitionend", transitionEnd);

function setDot(n) {
    for (var i = 0; dots[i]; i++) {
        dots[i].classList.remove("current");
    }
    dots[n].classList.add("current");
}
