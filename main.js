// INICIA O JOGO

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
// Pega tempo incial
var tempoInicial = new Date().getTime();
window.t1 = tempoInicial;
// FIM INICIA JOGO

// SISTEMA DE PROGRESSO
var i = 0;
var src = [];
var index = [];
var move_counter = 0;
var game_progress = 0;
var stars = 3;

$('.socket').on('click', function(){ // Quando clica numa imagen
  $(this).children().css('display', 'block');
  console.log('click');
  $(this).children().css('pointer-events', 'none');
  index[i] = $(this).index();
  i++;
  if (i == 2) { // Quando se clica em duas imagens
    move_counter++;

    if (move_counter == 8) {
      document.getElementsByClassName('fa-star')[2].style.display = "none";
    }
    if (move_counter == 16) {
      document.getElementsByClassName('fa-star')[1].style.display = "none";
    }

    var index1 = index.pop();
    var index0 = index.pop();

    var src1 = $('img')[index1].src;
    var src0 = $('img')[index0].src;

    if (src0 == src1) { // Se imagens iguais
      game_progress++;
      i = 0;
      if (game_progress == 8) { // Fim de jogo
        var t2 = new Date().getTime();
        var distance = t2 - t1;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (minutes == 0) {
          alert('Você fez ' + move_counter + ' jogadas para terminar o jogo em ' + seconds + ' segundos.');
        }
        else {
          alert('Você fez ' + move_counter + ' jogadas para terminar o jogo em ' + minutes + ' minutos e ' + seconds + ' segundos.');
        }
        // console.log(minutes);
        // console.log('Você terminou o jogo em ' + minutes + ' minutos e ' + seconds + ' segundos.');
        // console.log('Você fez ' + move_counter + ' jogadas.');
      }
      // console.log('gg');
    }
    else { // Se imagens diferentes
      setTimeout(function() {
        document.getElementsByTagName('img')[index1].style.display = 'none';
        document.getElementsByTagName('img')[index0].style.display = 'none';
        $('img[index1]').css('pointer-events', 'auto');
        $('img[index0]').css('pointer-events', 'auto');
      }, 1000);
      i = 0;
    }
  }
});
// FIM SISTEMA DE PROGRESSO


// TIMER
var segundos = 0;
var minutos = 0;
setInterval(function functionSegundos() {
  segundos++;
  if (segundos == 60) {
    segundos = 0;
    minutos++;
  }
  document.getElementById('tempo').innerHTML = 'Tempo: ' + minutos + ' minutos e ' + segundos + ' segundos.';
},1000);

// Novo jogo (refresh page)
function functionNewgame() {
  location.reload();
}
