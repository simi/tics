var freeButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function play(number) {
  var el = document.getElementById('button' + number);
  if(el.innerHTML === '') {
    freeButtons.splice(freeButtons.indexOf(number), 1);
    el.innerHTML = 'x';

    if(freeButtons.length > 0) {
      var randomButton = freeButtons[Math.floor(Math.random() * freeButtons.length)];
      el = document.getElementById('button' + randomButton);
      freeButtons.splice(freeButtons.indexOf(randomButton), 1);
      el.innerHTML = 'o';
    }
  }
}
