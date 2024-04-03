function rand(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function Choose(play){

    let resultado = "";
    if (play == 1) {
            resultado = "stone";
         }else if (play == 2) {
            resultado = "paper";
         } else if (play == 3) {
            resultado = "scissors";
         }else{
            resultado = "Mal elegido";
         }

         return resultado;
}
function result(player,pc) {
   let resultado = "";
   if (player == pc) {
            resultado = "draw";
         }else if (player ==1 && pc == 3 || player ==2 && pc == 1 || player ==3 && pc == 2) {
            resultado = "win";
            wins++;
         }else{ resultado = "lost";
            losts++;
         }
         return resultado;
}
        //1 es piedra, 2 es papel y 3 es tijera
        let player = 0;
        let pc = 0;
        let wins = 0;
        let losts = 0;

        while (wins < 3 && losts < 3) {
        
         pc = rand(1,3);
    
         player = prompt("Choose: 1 is for stone, 2 for paper and 3 is for scissors");
        
         alert("Player chose "+ Choose(player));
         alert("Pc chose "+ Choose(pc));
         alert("you "+result(player,pc));
         
        }   
        alert("you have "+wins+" wins and "+losts+" losts");

