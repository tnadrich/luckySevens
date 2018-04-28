function rollDice() {

    var startingBet = parseInt(document.getElementById("startingBet").value);
    if ( startingBet > 0 ) {
        var gameMoney = startingBet;
        var i = gameMoney;
        var rolls=0;
        var maxMoney=[];
        var maxRolls=0;
        while ( i > 0 ){
            if (gameMoney > 0){
            rolls++;    
                var roll1 = Math.ceil(Math.random() * (1 + 6 - 1));
                var roll2 = Math.ceil(Math.random() * (1 + 6 - 1));
                if (roll1 + roll2 == 7){
                    gameMoney += 4;
                } else{
                    gameMoney -= 1;
            }
            maxMoney.push(gameMoney);
            } else{
                maxRolls = maxMoney.indexOf(Math.max.apply(Math, maxMoney)) + 1;
                    var table1 = document.getElementById("resultTable");
                    table1.style.display = "table";
                    document.getElementById("1").innerHTML = "$"+startingBet+".00";
                    document.getElementById("2").innerHTML = rolls;
                    document.getElementById("3").innerHTML = "$"+Math.max.apply(Math, maxMoney)+".00";
                    document.getElementById("4").innerHTML = maxRolls;
                document.getElementById("submitButton").innerHTML = "Play Again";
                break;
            }
        }

    } else{
        alert("Please place a positive starting bet (greater than 1 dollar)!");
    }
}
function clearForm() {
    document.getElementById("luckySevensForm").reset();
    var table2 = document.getElementById("resultTable");
    table2.style.display = "none";
}
