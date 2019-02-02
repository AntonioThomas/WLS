const button = $("#btn");
//console.log('Button: ', button);

button.on("click", function() {
    //console.log('Click');
    window.open("file:///C:/Users/anton/Desktop/WLS/main.html");
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
