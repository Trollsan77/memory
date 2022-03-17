// cookiebar
document.addEventListener('DOMContentLoaded', function () {
  cookieconsent.run({"notice_banner_type":"simple","consent_type":"express","palette":"light","language":"sv","page_load_consent_levels":["strictly-necessary"],"notice_banner_reject_button_hide":false,"preferences_center_close_button_hide":false,"page_refresh_confirmation_buttons":false,"website_name":"Memory"});
  });

let count = 0;
let firstSelection = '';
let secondSelection = '';
let previousTarget = null;
let restart = document.querySelector('.restart')
let cards = document.createElement('article');
let resultDisplay = document.querySelector('#resultat')
let movesDisplay =document.querySelector('#moves')
const cardsArray = [
  {img: 'img/char-01.png',name: 'ninja',},
  {img: 'img/char-02.png',name: 'musiker',},
  {img: 'img/char-03.png',name: 'professor',},
  {img: 'img/char-04.png',name: 'läkare',},
  {img: 'img/char-05.png',name: 'bagare',},
  {img: 'img/char-06.png',name: 'tränare',},
  {img: 'img/char-07.png',name: 'fe',},
  {img: 'img/char-08.png',name: 'fotograf',},
  {img: 'img/char-09.png',name: 'dykare',},
  {img: 'img/char-10.png',name: 'clown',},
  {img: 'img/char-11.png',name: 'astronaut',},
  {img: 'img/char-12.png',name: 'polis',},
  {img: 'img/char-01.png',name: 'ninja',},
  {img: 'img/char-02.png',name: 'musiker',},
  {img: 'img/char-03.png',name: 'professor',},
  {img: 'img/char-04.png',name: 'läkare',},
  {img: 'img/char-05.png',name: 'bagare',},
  {img: 'img/char-06.png',name: 'tränare',},
  {img: 'img/char-07.png',name: 'fe',},
  {img: 'img/char-08.png',name: 'fotograf',},
  {img: 'img/char-09.png',name: 'dykare',},
  {img: 'img/char-10.png',name: 'clown',},
  {img: 'img/char-11.png',name: 'astronaut',},
  {img: 'img/char-12.png',name: 'polis',},
];
let game = generateGame();
let cardsWon = []
let moves = []


function generateGame(){

  for(let i = 0; i < Array.length; i++) {
        
    let gameCards = cardsArray
    gameCards.sort(() => 0.5 - Math.random());
        
    //Skapar spelplanen
    let game = document.getElementById('game');
    cards.setAttribute('class', 'cards');
    game.appendChild(cards);

      //Skapar korten
    gameCards.forEach((item, i) => {
      item.id = i + 1;
      let { name, img, } = item;
      let card = document.createElement('figure');
      let front = document.createElement('img');
      let back = document.createElement('img');
      card.dataset.name = name
      card.setAttribute('data-id', i)
      card.setAttribute("tabindex", "0");

      
    
      // Lägger till classer
      card.classList.add('card');
      front.classList.add('front');
      back.classList.add('back');

      card.addEventListener('click', clickedCard); 
      card.addEventListener('keydown', keyBoardClick);
      
      //Koppla bilderna till korten
      back.style.backgroundImage = `url(${img})`;
      front.style.backgroundImage = `url(img/card.png)`;
      back.alt = '';
      front.alt = '';

      //Koppla korten till sectionen
      cards.appendChild(card);
      card.appendChild(front);
      card.appendChild(back);
    }
    )} 
}
function keyBoardClick (e) {
  let keyBoard = document.querySelector('.card');
 
  switch(e.key){
    case 'ArrowDown':
      console.log('ArrowDown');
      break;
    case 'ArrowUp':
      console.log('ArrowUp');
      break;
    case 'ArrowLeft':
      console.log('ArrowLeft');
      break;
    case 'ArrowRight':
    console.log('ArrowRight');
    break;
  default:
    console.log(e.key, e.keyCode, e.location);
    return;
  }
  e.preventDefault();
}

let cardMatch = () => {
  cardsWon.push(1);
  resultDisplay.textContent = cardsWon.length
  if  (cardsWon.length === cardsArray.length) {
    resultDisplay.textContent = ' Grattis, du hittade alla'
    restart.style.visibility = "visible";
  }
  let selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
    });
}
let resetSelected = () => {
  moves.push(1);
  movesDisplay.textContent = moves.length
  
  firstSelection = '';
  secondSelection = '';
  count = 0;

 let selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
    
});
};
function clickedCard(e){
  let clicked = (e).target;
  //Blockerar så man inte kan klicka på redan vald
  if (
    clicked.nodeName === 'ARTICLE' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match') 
  ) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      firstSelection = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    } else {
      secondSelection = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    }
    if (firstSelection && secondSelection) {
      if (firstSelection === secondSelection) {
        setTimeout(cardMatch(), 1000);
      }
      setTimeout(resetSelected, 1000);
    }
  previousTarget = clicked;
  }
};
 
let restartGame = () => {
 location.reload(); 
}
let restartButton = restart; 
restartButton.addEventListener("click", restartGame); 


