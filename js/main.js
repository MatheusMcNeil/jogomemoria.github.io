/* Começa o jogo:
Coloca as cartas em posições aleatórias
TODO Começa a contar o tempo
*/
function funcStart() {
  var array1 = []; // Cria array de 8 números aleatórios
  while (array1.length < 8) {
    var x = Math.floor((Math.random() * 8) + 1);
    if (!array1.includes(x)) {
      array1.push(x);
    }
  }

  var array2 = []; // Cria array de 8 números aleatórios
  while (array2.length < 8) {
    var x = Math.floor((Math.random() * 8) + 1);
    if (!array2.includes(x)) {
      array2.push(x);
    }
  }
  var array3 = []; // Junta as arrays anteriores
  var array3 = array1.concat(array2);

  for (var i = 0; i < 16; i++) {
    document.getElementsByTagName('img')[i].src = 'img/'.concat(String(array3.pop())).concat('.png');
  }
}
// VVVV AQUI VVVV
var src = [];
var i = 0;

$('.socket').on('click', function(){
  src[i] = $('img')[i].src;
  i++;
  console.log(src);
  // index[i] = $(this).index();
  // var x = $(this).index();
  // console.log($('img')[x].src);

  // if (i == 2) {
    // console.log(src[0]);
    // console.log(src[1]);
    // if (src[0] == src[1]) {
    //   console.log('joia');
    // }
    // console.log('naum');
  // }

  // if (i == 2) {
    // var index1 = index.pop();
    // var index2 = index.pop();
    // var sc1 = $('img')[index1];
    // var sc2 = $('img')[index2];

    // if (src1 == src2) {
    //   console.log('success');
    // }

  // }
});
