functionStart();

// SISTEMA DE PROGRESSO
var stars = 3;
var move_counter = 0;
var game_progress = 0;

var i = 0;
var src = [];
var index = [];

$('.socket').on('click', function(){ // Quando clica numa imagem
  $(this).children().css('display', 'block'); // Mostra imagem
  index[i] = $(this).index(); // Pega index do div clicado
  i++;
  if (i == 2) { // Quando se clica em duas imagens
    functionMoveCounter();
    functionScore();
    var index0 = index.pop();
    var index1 = index.pop();
    var src0 = $('img')[index0].src;
    var src1 = $('img')[index1].src;
    if (src0 == src1) { // Se imagens iguais
      game_progress++;
      i = 0; // Zera pegador de index
      $('.socket').eq(index0).addClass('disabled');
      $('.socket').eq(index1).addClass('disabled');
      if (game_progress == 8) { // Fim de jogo
        functionGameover();
        functionStopTimer();
      }
    }
    else { // Se imagens diferentes
      $('body').css('pointer-events', 'none');
      setTimeout(function() {
        $('body').css('pointer-events', 'auto');
        $('img').eq(index0).css('display', 'none');
        $('img').eq(index1).css('display', 'none');
        $('.socket').eq(index0).removeClass('disabled');
        $('.socket').eq(index1).removeClass('disabled');
      }, 1000);
      i = 0; // Zera pegador de index
    }
  }
});
// FIM SISTEMA DE PROGRESSO

function functionStart() {
  // Cria array de 8 números aleatórios
  var array1 = [];
  while (array1.length < 8) {
    var x = Math.floor((Math.random() * 8) + 1);
    if (!array1.includes(x)) {
      array1.push(x);
    }
  }
  // Cria array de 8 números aleatórios
  var array2 = [];
  while (array2.length < 8) {
    var x = Math.floor((Math.random() * 8) + 1);
    if (!array2.includes(x)) {
      array2.push(x);
    }
  }
  // Junta as arrays anteriores
  var array3 = [];
  var array3 = array1.concat(array2);
  // Distribui as cartas
  for (var i = 0; i < 16; i++) {
    document.getElementsByTagName('img')[i].src = 'img/'.concat(String(array3.pop())).concat('.png');
    document.getElementsByTagName('img')[i].style.display = 'none';
  }
}

function functionMoveCounter() {
  move_counter++;
  $('#movimentos').text('Movimentos: ' + move_counter);
}

// TIMER
var minutos = 0;
var segundos = 0;
var timerInterval = setInterval(functionTimer, 1000);
var stopTimer = 0;

function functionTimer() {
  segundos++;
  if (segundos == 60) {
    segundos = 0;
    minutos++;
  }
  document.getElementById('tempo').innerHTML = ('Tempo: ' + minutos + ' minutos e ' + segundos + ' segundos.');
}

function functionStopTimer() {
  clearInterval(timerInterval);
}

function functionScore() {
  if (move_counter == 9) {
    document.getElementsByClassName('fa-star')[2].style.display = "none";
    stars--;
  }
  if (move_counter == 17) {
    document.getElementsByClassName('fa-star')[1].style.display = "none";
    stars--;
  }
}

function functionGameover() {
  if (minutos == 0) {
      $('.modal-p').text('Você terminou o jogo em apenas ' + segundos + ' segundos. Fez '+ move_counter + ' jogadas e conquistou ' + stars + ' estrelas.');
  }
  else {
    $('.modal-p').text('Você terminou o jogo em ' + minutos + ' e ' + segundos + ' segundos. Fez '+ move_counter + ' jogadas e conquistou ' + stars + ' estrelas.');
  }
  $('#myModal').modal({backdrop: 'static', keyboard: false}); // Abre modal evitando que feche quando se clica fora dele ou se aperta um botão qualquer do teclado
}

function functionNewgame() {
  location.reload();
}
