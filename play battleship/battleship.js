var randomLoc=Math.floor(Math.random()*5);
var location1=randomLoc;
var location2=location1+1;
var location3=location2+1;

var guess;
var guesses=0;
var hits=0;

var isSunk=false;

while(isSunk==false){

    guess=prompt("Ready,aim,fire! (enter a number 0-6):");
    if (guess<0 ||guess>6) {
        alert("please enter a valid number");
    } else {
        guesses=guess+1;
    }
    if (guess==location1||guess==location2||guess==location3) {
        hits=hits+1;
        alert("HIT");
    
    
    if (hits==3) {
        isSunk=true;
        alert("You sank my battkeships!");
    }
}else{
        alert("MISS");
    }
}

var stats="You took" + guesses + "guesses to sank my battleship,"+ "which mean your accurate was"+(3/guesses);
alert(stats);