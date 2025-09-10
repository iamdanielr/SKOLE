function randomNumber(min, max) {
    return Math.floor(Math.random() *max + min)
}
function rullterning(){
    console .log(randomNumber(1,6));
    let dices = document.getElementsByClassName("terning");
    dices = [...dices];

    let hasWon =false;

    dices.forEach(dice => {
        dice.innerText = randomNumber(1,6);
        if(dice.innerText == 6){
            hasWon = true
        }
    });
    
if(hasWon){
    console.log("Gratulerer, du vant!🏆");
    document.body.style.backgroundColor = "green";
    }
    else{
        document.body.style.backgroundColor = "red";
    }
}
 
rulleterninger.addEventListener("click",rullterning);