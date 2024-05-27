let uncoveredCards = 0;
let card1 = 0;
let card2 = 0;
let firstResult = 0;
let secondResult = 0;
let motion = 0;
let success = 0;
let timer = false;
let timer1 = 30;
let regressiveTime = null;
let initialTimer = 30;

let showMotion = document.getElementById(`motion1`);
let showSuccess = document.getElementById(`success1`);
let showTimer = document.getElementById(`timeleft`);

let uncoveredCardsI = 0;
let card1I = 0;
let card2I = 0;
let firstResultI = 0;
let secondResultI = 0;
let motionI = 0;
let successI = 0;
let timerI = false;
let timer1I = 30;
let regressiveTimeI = null;
let initialTimerI = 30;

let showMotion2 = document.getElementById(`motion2`);
let showSuccess2 = document.getElementById(`success2`);
let showTimer2= document.getElementById(`timeleft2`);

let winAudio = new Audio('./sound/win.wav');
let loseAudio = new Audio('./sound/lose.wav');
let clickAudio = new Audio('./sound/click.wav');
let rightAudio = new Audio('./sound/right.wav');
let wrongAudio = new Audio('./sound/wrong.wav');

let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers = numbers.sort(()=>{return Math.random()-0.5});

function countTime(){
  regressiveTime = setInterval(()=>{
    timer1--;
    showTimer.innerHTML = `Tiempo: ${timer1} segundos`;
    if (timer1 == 0){
      clearInterval(regressiveTime);
      blockCards(numbers);
      loseAudio.play();
  }
 },1000);
}

function blockCards(){
  for (let i=0; i <= 15; i++){
    let blockCard = document.getElementById(i);
    blockCard.innerHTML =   numbers[i]
    blockCard.disabled = true;
  }
}

function uncovernro(id){
  
  if (timer == false){
    countTime();
    timer = true;
  }
  uncoveredCards++;
   
  if (uncoveredCards == 1) {
      //Mostrar el primer numero
      card1 = document.getElementById(id);
      firstResult = numbers[id];
      clickAudio.play();
      card1.innerHTML = firstResult;
      card1.disabled = true;
    
    }else if(uncoveredCards == 2){

      card2 = document.getElementById(id);
      secondResult = numbers[id];
      card2.innerHTML = secondResult;

      card2.disabled = true;

    //Incrementar movimiento
      motion++;
      showMotion.innerHTML = `Movimientos: ${motion}`;

    if(firstResult == secondResult){

      uncoveredCards = 0;
      success++;
      showSuccess.innerHTML = `Aciertos: ${success}`;
      rightAudio.play();
      if (success == 8){
        winAudio.play();
        clearInterval(regressiveTime);
        showSuccess.innerHTML = `Aciertos: ${success}`;
        showMotion.innerHTML = `Movimientos: ${motion}`;
        showTimer.innerHTML = ` ¡Perfecto!, Solo tardaste ${initialTimer - timer1}segundos`;
      }

     }else{
      wrongAudio.play();
      setTimeout(()=>{
        card1.innerHTML = " ";
        card2.innerHTML = " ";
        card1.disabled = false;
        card2.disabled = false;
        uncoveredCards = 0;
      },800)
     }
    }
  }

    

let numbersI = [9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16];
numbersI = numbersI.sort(()=>{return Math.random()-0.5});

function countTimeI(){
  regressiveTimeI = setInterval(()=>{
    timer1I--;
    showTimer2.innerHTML = `Tiempo: ${timer1I} segundos`;
    if (timer1I == 0){
      clearInterval(regressiveTimeI);
      blockCardsI(numbersI);
      loseAudio.play();
  }
 },1000);
}


function blockCardsI(){
  for (let i=16; i <= 31; i++){
    let blockCardI = document.getElementById(i);
    blockCardI.innerHTML =   `<img src="./images/${numbersI[i-16]}.png" alt="">`;
    blockCardI.disabled = true;
  }
}

function uncoverimg(id){
  if (timerI == false){
    countTimeI();
    timerI = true;
  }
  uncoveredCardsI++;
   
  if (uncoveredCardsI == 1) {
    // Mostrar la primera imagen
    card1I = document.getElementById(id+16);
    firstResultI = numbersI[id];
    clickAudio.play();
    card1I.innerHTML = `<img src="./images/${firstResultI}.png" alt="">`; 
    card1I.disabled = true;
  } else if(uncoveredCardsI == 2){
    card2I = document.getElementById(id+16);
    secondResultI = numbersI[id];
    card2I.innerHTML = `<img src="./images/${secondResultI}.png" alt="">`;
    card2I.disabled = true;

    // Incrementar movimiento
    motionI++;
    showMotion2.innerHTML = `Movimientos: ${motionI}`;

    if(firstResultI == secondResultI){
      rightAudio.play();
      uncoveredCardsI = 0;
      successI++;
      showSuccess2.innerHTML = `Aciertos: ${successI}`;

      if (successI == 8){
        clearInterval(regressiveTimeI);
        showSuccess2.innerHTML = `Aciertos: ${successI}`;
        showMotion2.innerHTML = `Movimientos: ${motionI}`;
        showTimer2.innerHTML = `¡Perfecto! Solo tardaste ${initialTimerI - timer1I} segundos`;
      }
    } else {
      wrongAudio.play();
      setTimeout(()=>{
        card1I.innerHTML = "";
        card2I.innerHTML = "";
        card1I.disabled = false;
        card2I.disabled = false;
        uncoveredCardsI = 0;
      }, 800);
    }
  }
}

function reiniciar(){
 
    // Reiniciar variables y estadísticas del primer juego con números
    uncoveredCards = 0;
    card1 = 0;
    card2 = 0;
    firstResult = 0;
    secondResult = 0;
    motion = 0;
    success = 0;
    timer = false;
    timer1 = initialTimer;
    clearInterval(regressiveTime);
    showTimer.innerHTML = `Tiempo: ${initialTimer} segundos`;
    showSuccess.innerHTML = `Aciertos: 0`;
    showMotion.innerHTML = `Movimientos: 0`;
  
    
    numbers = numbers.sort(()=>{return Math.random()-0.5});
  
    // Restablecer el contenido de las cartas del primer juego
    for (let i = 0; i <= 15; i++) {
      let card = document.getElementById(i);
      card.innerHTML = '';
      card.disabled = false;
    }
  
  
  }
  
  function reiniciar2(){
 
   
  
    // Reiniciar variables y estadísticas del segundo juego con imágenes
    uncoveredCardsI = 0;
    card1I = 0;
    card2I = 0;
    firstResultI = 0;
    secondResultI = 0;
    motionI = 0;
    successI = 0;
    timerI = false;
    timer1I = initialTimerI;
    clearInterval(regressiveTimeI);
    showTimer2.innerHTML = `Tiempo: ${initialTimerI} segundos`;
    showSuccess2.innerHTML = `Aciertos: 0`;
    showMotion2.innerHTML = `Movimientos: 0`;

    numbersI = numbersI.sort(()=>{return Math.random()-0.5});
  
    // Restablecer el contenido de las cartas del segundo juego
    for (let i = 16; i <= 31; i++) {
      let card = document.getElementById(i);
      card.innerHTML = '';
      card.disabled = false;
    }
  }
  
