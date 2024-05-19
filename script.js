var timer = 60;
var score = 0;
var hitrn;
function increaseScore(){
    score += 10;
    document.querySelector("#scorevalue").textContent = score;  //eventlisner or eventbubbling jispe click kroge wo element pr event raise hoga, aur event listener na milne pr event element ke parent pr listener dhundhega, waha bhi na milne pr event parent ke parent ke parent pr listener dhundhega 
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent = hitrn;
}
function makeBubble(){
    var clutter = "";
for(i = 1; i<=102; i++){
    var rn = Math.floor(Math.random()*10);         //Math.random generates point values like 1.2345 and Math.floor converts point values into simple values like 1.23456 = 1
    clutter += `<div class="bubble">${rn}</div>`;         //in single cote '' = dynamic values (+2+2) and back tick `` = ${2+2}
}
document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timervalue").textContent = timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`
       
    }
    }, 1000);
}
document.querySelector("#pbottom").addEventListener("click", function(details) {
    if (details.target.classList.contains("bubble")) {
        var clickednum = Number(details.target.textContent);
        if (clickednum === hitrn) {
            increaseScore();
            makeBubble();
            getNewHit();
        }
    }
});
getNewHit();
runTimer();
makeBubble();