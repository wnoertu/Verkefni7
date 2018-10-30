/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert("Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.");
  var playAgain = true;
  while (playAgain){
    play();
    playAgain = confirm("Spila aftur?");
  }
}


/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  
  var btime = Date.now();
  var correct = 0;

  for(var i = 0; i < GAMES_TO_PLAY; i++){
    var answer = ask();
    if(answer === null){
      alert("Hætt í leik!")
      return;
    }
    if(answer){
      correct++;
    }
  }
  var ftime = Date.now();;
  var timed = (ftime-btime)/1000;

  alert("Þú svaraðir" + correct + " af" + GAMES_TO_PLAY + " dæmum rétt á " + timed.toFixed(4) + " sekúndum. \n Meðalrétt svör á sekúndu eru " + (correct/timed).toFixed(4) );
  }

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  
  var question = makeQuestion(['+', '-', '*', '/']);

  var answer = prompt(question[1]);
  if(answer === null){
    return null;
  }
  return question[0] == answer;
}

function makeQuestion(mod){

  switch(mod[Math.floor(Math.random()*4)]){
    case '+':
      var random1 = randomNumber(1,100);
      var random2 = randomNumber(1,100);
      var answer = random1 + random2;
      var question = random1 + " + " + random2;
      break;
      
    case '-':
      var random1 = randomNumber(1,100);
      var random2 = randomNumber(1,100);
      var answer = random1 - random2;
      var question = random1 + " - " + random2;
      break;      

    case '*':
      var random1 = randomNumber(1,10);
      var random2 = randomNumber(1,10);
      var answer = random1 * random2;
      var question = random1 + " * " + random2;
      break;

    case '/':
      var random1 = randomNumber(2,10);
      var random2 = randomNumber(2,10)* random1;
      var answer = random2 / random1;
      var question = random2 + " / " + random1;
      break;
  }

  return [answer, question];
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
