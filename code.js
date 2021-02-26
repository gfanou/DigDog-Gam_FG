
$(document).ready(function() {
    remainingBone()
    dangerMeter()
    $("span#bRemaining").change(output);
    //$("span#bRemaining").text(output -1);
    let numRowsNeeded = 5;
    let numRowsCreated = 0;

    while(numRowsCreated < numRowsNeeded)
    {
        // begin creating a row of 7 squares
        let numSquaresNeeded = 5;
        let numSquaresCreated = 0;

        while (numSquaresCreated < numSquaresNeeded) {
            createSquare();
            numSquaresCreated++;
        }

        // end creating the row

        // insert a break to drop down to new line
        let breakTag = $("<br>");
        $("div#board").append(breakTag);
        // add one to number of rows so far
        numRowsCreated++;
    }

    // while number of surprises successfully hidden < 5

    for (let numSurprisesHidden = 0; numSurprisesHidden < 5; numSurprisesHidden++) {
        // pick a random square
        // pick a random number between 0 and 24
        let randomNumber = Math.floor(Math.random() * 25);

        let randomSquare = $("span.square").eq(randomNumber);

        // if the square does not already have a surprise
        if (!randomSquare.hasClass("surprise")) {

            // hide a surprise

            randomSquare.addClass("surprise");
        }

        // add to number of surprises hidden
    }
});

function playerGuess() {
    // find what span was clicked exactly
    let clickedSpan = $(this);
    let isSurprise = clickedSpan.hasClass("surprise");
    const numBone = 5;
    let output = 0;
    if (isSurprise === true) {
        alert("You found a surprise!");
        clickedSpan.css("background-image", "url('bone.jpg')");
        clickedSpan.css( "background-size", "100% 100%");
        clickedSpan.off("click");
       //let output = numBone -1;
        for (let isSurprise = 0; isSurprise <= numBone; isSurprise++)
        {
            output = numBone - isSurprise;

            $("span#bRemaining").text(output);
        }


    }


    else if (isSurprise === false){
        clickedSpan.css("background-color", "brown");

    }


}

function remainingBone() {




}



function generateRandomBGColor() {
    let red, green, blue, luma;

    do {
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);

        luma = (0.2126 * red) + (0.7152 * green) + (0.0722 * blue);
    } while (luma < 128);

    let rgbString = `rgb(${red}, ${green}, ${blue})`;
    return rgbString;
}


function createSquare() {
    let board = $("div#board");

    let square = $("<span>");
    square.height(80);
    square.width(80);
    square.addClass("square");
   // square.text("");
    let backgroundColor = generateRandomBGColor();


    square.css("background-color", backgroundColor);
    square.css("borderRadius", "10px");
    square.css("borderColor", "black");

    // square.css("background-image", "url('dog.jpg')");
    // square.css( "background-size", "100% 100%");


    square.click(playerGuess);

    square.on("click", playerGuess);

    board.append(square);

}



function dangerMeter() {
        let dangerMeter = $("span#dangerMeter");
        let totalToGuess = 0;
        setInterval(function (){
        totalToGuess++;
        dangerMeter.css("width", totalToGuess + "%");
        dangerMeter.attr("aria-valuenow", totalToGuess);
        },500);
}

